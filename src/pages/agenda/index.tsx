
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addDays } from 'date-fns';

export default function Agenda(){


    let state = {
        canDrop: true,
        calendarWeekends: true,
        calendarEvents: [
            { title: "Evento 1", start: new Date() },
            { title: "Evento 2", start: addDays(new Date(), 3) },
            { title: "Evento 3", start: addDays(new Date(), 2) }
        ]
    };

    return(
    <>
        <h1>Agenda</h1>
        <hr/>
        <FullCalendar
            editable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            weekends={state.calendarWeekends}
            events={state.calendarEvents}
            locale = {'pt-BR'}
        />
    </>
    )
}
