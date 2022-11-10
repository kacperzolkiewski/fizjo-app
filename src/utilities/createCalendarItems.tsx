import { CalendarItem } from "@/components/CalendarItem";
import { addDays, format } from "date-fns";
import { pl } from "date-fns/locale";
import React, { ReactElement } from "react";

export const createCalendarItems = (startDay: number, numOfItems: number) => {
  const items: ReactElement[] = [];
  const today = new Date();

  for (let day = startDay; day < numOfItems; day++) {
    items.push(
      <CalendarItem
        key={day}
        date={format(addDays(today, day), "iii, d LLL", {
          locale: pl,
        })}
      />
    );
  }

  return items;
};
