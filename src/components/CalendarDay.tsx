import { Text, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { ReserveVisitButton } from "@/components/ReserveVisitButton";
import { pl } from "date-fns/locale";
import { addHours, format, isBefore, isEqual, parseISO } from "date-fns";
import {
  usePhysiotherapistQuery,
  VisitTypesQuery,
} from "@/features/physiotherapist/api/graphql";
import { isNil } from "lodash";
import {
  PatientVisitsDocument,
  PhysiotherapistVisitsDocument,
  PhysiotherapistVisitsQuery,
  useCreateVisitMutation,
} from "@/features/visits/api/graphql";
import { ReserveVisitModal } from "@/components/ReserveVisitModal";
import { usePatient } from "@/utilities/usePatient";

interface CalendarDayProps {
  date: Date;
  physioId?: string;
  physioVisits: PhysiotherapistVisitsQuery["visits"];
  physioVisitTypes: VisitTypesQuery["visit_types"];
}

const checkIfHourIsReserved = (
  visitDate: Date,
  physioVisits: PhysiotherapistVisitsQuery["visits"]
) => {
  let reserved = false;
  if (isBefore(visitDate, new Date())) {
    return true;
  }

  physioVisits.forEach((visit) => {
    if (isEqual(parseISO(visit.start_timestamp), visitDate)) {
      reserved = true;
    }
  });

  return reserved;
};

export const CalendarDay = ({
  date,
  physioId,
  physioVisits,
  physioVisitTypes,
}: CalendarDayProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formattedDate = format(date, "iii, d LLL", {
    locale: pl,
  });
  const patient = usePatient();
  const { data } = usePhysiotherapistQuery({ variables: { id: physioId } });
  const [visitDate, setVisitDate] = useState(new Date());
  const physiotherapist = data?.physiotherapists_by_pk;
  const showToast = useToast();
  const [createVisit] = useCreateVisitMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie Zarezerwowano wizytę",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Zarezerwowanie wizyty nie powiodło się, spróbuj ponownie",
      });
    },
  });

  const { startDayHour, endDayHour } = !isNil(physiotherapist)
    ? {
        startDayHour: physiotherapist.startWork,
        endDayHour: physiotherapist.endWork,
      }
    : { startDayHour: 8, endDayHour: 16 };

  const createReserveButtons = () => {
    const items: ReactElement[] = [];
    for (let hour = startDayHour; hour < endDayHour; hour++) {
      const startVisitDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour
      );

      items.push(
        <ReserveVisitButton
          key={hour}
          date={startVisitDate}
          isReserved={checkIfHourIsReserved(startVisitDate, physioVisits)}
          onClick={(date) => {
            setVisitDate(date);
            onOpen();
          }}
        />
      );
    }
    return items;
  };

  return (
    <VStack overflowX="scroll" maxH="100%" pb={5} w="120px">
      <Text borderBottom="1px solid lightgray">{formattedDate}</Text>
      {createReserveButtons()}
      <ReserveVisitModal
        visitTypes={physioVisitTypes}
        date={visitDate}
        isOpen={isOpen}
        onClose={onClose}
        onReserveVisit={(visitTypeId: string | null) => {
          void createVisit({
            refetchQueries: [
              PatientVisitsDocument,
              PhysiotherapistVisitsDocument,
            ],
            variables: {
              start_timestamp: visitDate,
              end_timestamp: addHours(visitDate, 1),
              physiotherapist_id: physioId,
              patient_id: patient.id,
              visit_type_id: visitTypeId,
            },
          });
        }}
      />
    </VStack>
  );
};
