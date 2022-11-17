import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { VisitMenu } from "@/features/visits/components/VisitsMenu";
import { PatientVisitsQuery } from "@/features/visits/api/graphql";
import { ArrayElement } from "@/utilities/types";
import { isNil } from "lodash";
import { format, parseISO } from "date-fns";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VisitProps {
  visit: ArrayElement<PatientVisitsQuery["visits"]>;
  isPatient: boolean;
}

export const Visit = ({ visit, isPatient }: VisitProps): JSX.Element => {
  const date = format(parseISO(visit.start_timestamp), "dd.MM.yyyy");
  const duration = `${new Date(visit.start_timestamp)
    .getHours()
    .toString()
    .padStart(2, "0")}:00-${new Date(visit.end_timestamp)
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

  return (
    <Tr h="48px" textAlign="center">
      <Td>{date}</Td>
      <Td>
        {!isNil(visit.visit_type) ? visit.visit_type.name : "Fizjoterapia"}
      </Td>
      <Td>{duration}</Td>
      <Td>
        {!isNil(visit.visit_type) ? `${visit.visit_type.price}zł` : "---"}
      </Td>
      <Td>
        {isPatient
          ? `${visit.physiotherapist?.name} ${visit.physiotherapist?.surname}`
          : `${visit.patient?.name} ${visit.patient?.surname}`}
      </Td>
      <Td>
        <VisitMenu visitId={visit.id} />
      </Td>
    </Tr>
  );
};
