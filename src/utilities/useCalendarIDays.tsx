import { CalendarDay } from "@/components/CalendarDay";
import { useVisitTypesQuery } from "@/features/physiotherapist/api/graphql";
import { usePhysiotherapistVisitsQuery } from "@/features/visits/api/graphql";
import { addDays } from "date-fns";
import React, { ReactElement } from "react";

export const useCalendarDays = (
  startDay: number,
  numOfItems: number,
  physioId?: string
) => {
  const items: ReactElement[] = [];
  const today = new Date();
  const { data } = usePhysiotherapistVisitsQuery({ variables: { physioId } });
  const { data: visitTypesData } = useVisitTypesQuery({
    variables: {
      physiotherapist_id: physioId,
    },
  });
  const physioVisits = data?.visits ?? [];
  const physioVisitTypes = visitTypesData?.visit_types ?? [];

  for (let day = startDay; day < numOfItems; day++) {
    items.push(
      <CalendarDay
        key={day}
        date={addDays(today, day)}
        physioId={physioId}
        physioVisits={physioVisits}
        physioVisitTypes={physioVisitTypes}
      />
    );
  }

  return items;
};
