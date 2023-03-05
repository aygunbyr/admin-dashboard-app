import { useState } from "react";
import {
  formatDate,
  EventApi,
  EventClickArg,
  DateSelectArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<Array<EventApi>>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box
          flex="1 1 20%"
          bgcolor="#fcfcfc"
          sx={{ border: "1px solid #f2f0f0" }}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h4" sx={{ fontSize: "20px" }}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event: EventApi) => (
              <ListItem
                key={event.id}
                sx={{
                  color: "white",
                  backgroundColor: "primary.main",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.startStr, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2023-03-14" },
              { id: "4321", title: "Timed event", date: "2023-03-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
