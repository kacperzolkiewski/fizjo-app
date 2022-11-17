import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pl";
import { usePhysiotherapistVisitsQuery } from "@/features/visits/api/graphql";
import { usePhysiotherapist } from "@/utilities/usePhysiotherapist";

const localizer = momentLocalizer(moment);

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

interface Event {
  start: Date;
  end: Date;
  title?: string;
}

export const ReactCalendar = () => {
  const physiotherapist = usePhysiotherapist();
  const { data } = usePhysiotherapistVisitsQuery({
    variables: { physioId: physiotherapist.id },
  });
  const [events, setEvents] = useState<Event[]>([]);
  const visits = data?.visits ?? [];

  useEffect(() => {
    const tempEvents: Event[] = [];
    visits.forEach((visit) => {
      const start = new Date(visit.start_timestamp);
      const end = new Date(visit.end_timestamp);
      tempEvents.push({
        title: visit.visit_type?.name,
        start,
        end,
      });
    });
    setEvents(tempEvents);
  }, [visits]);

  return (
    <Calendar
      style={{
        width: "100%",
      }}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
    />
  );
};
