import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pl";

const localizer = momentLocalizer(moment);

function addHours(numOfHours: number, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);

  return dateCopy;
}

function removeHours(numOfHours: number, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setTime(dateCopy.getTime() - numOfHours * 60 * 60 * 1000);

  return dateCopy;
}

const messages = {
  date: "Data",
  time: "Czas",
  event: "Wydarzenie",
  allDay: "Cały dzień",
  week: "Tydzień",
  work_week: "Tydzień pracy",
  day: "Dzień",
  month: "Miesiąc",
  previous: "Poprzedni",
  next: "Następny",
  yesterday: "Wczoraj",
  tomorrow: "Jutro",
  today: "Dzisiaj",
  agenda: "Agenda",
  noEventsInRange: "Nie ma wydarzeń w tym przedziale.",
  showMore: function showMore(total: number) {
    return `"+" ${total} więcej`;
  },
};

export const ReactCalendar = () => {
  const date = new Date();
  const result = addHours(2, date);

  return (
    <Calendar
      style={{
        width: "100%",
      }}
      localizer={localizer}
      events={[
        {
          title: "Fizjoterapia",
          allDay: false,
          start: new Date(),
          end: result,
        },
        {
          title: "Igłoterapia",
          allDay: false,
          start: removeHours(4, date),
          end: date,
        },
      ]}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
    />
  );
};
