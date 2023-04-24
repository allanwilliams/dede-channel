import React, { useState} from 'react';
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useBase } from '@/contexts/base';
import {IEvento} from '../../interfaces/IEvento';


export default function Agenda() {
    
    const { weekendsVisible, setWeekendsVisible, currentEvents, setCurrentEvents } = useBase();

    return (
        <>
        <div className='demo-app-sidebar-section d-flex'>
          <h1>Agenda </h1>
          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={exibirFinalDeSemanaToggle}
            ></input> &nbsp;
            Considerar final de semana?
          </label>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-12">            
                <div className='demo-app'>
                    <div className='demo-app-sidebar'>
                        {/* <div className='demo-app-sidebar-section'>
                            <h2>Instruções</h2>
                            <ul>
                            <li>Selecione a data desejada para criar um novo evento</li>
                            <li>Arraste para remarcar seu evento</li>
                            <li>Clique no evento para deletá-lo</li>
                            </ul>
                        </div>         */}
                        <div className='demo-app-sidebar-section' id="eventos">
                            <h2>Eventos ({currentEvents.length})</h2>
                            <ul>
                            {currentEvents.map(renderSidebarEvent)}
                            </ul>
                        </div>
                    </div>
                    <div className='demo-app-main'>
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                            }}
                            initialView='timeGridWeek'
                            locale = {'pt-BR'}
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            weekends={weekendsVisible}
                            initialEvents={currentEvents} 
                            select={escolherData}
                            eventContent={exibirEvento} // custom render function
                            eventClick={deletarEvento}
                            eventsSet={cadastrarEvento}
                            eventAdd={() => { alert('Evento cadastrado com sucesso') } }
                            eventChange={() => { alert('Evento alterado com sucesso') } }
                            eventRemove={() => { alert('Evento excluído com sucesso') } }
                        />
                    </div>
                </div>              
            </div>
        </div>
      </>
    )
  
    function exibirFinalDeSemanaToggle() {
      setWeekendsVisible(!weekendsVisible);
    }
  
    function escolherData (selectInfo: { view: { calendar: any }; startStr: any; endStr: any; allDay: any }) {
      let title = prompt('Qual o nome do seu evento?')
      let calendarApi = selectInfo.view.calendar
  
      calendarApi.unselect() // clear date selection
  
      if (title) {
        calendarApi.addEvent({
          id: "1",
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    }
  
    function deletarEvento (clickInfo: { event: { title: any; remove: () => void } }) {
      if (confirm(`Tem certeza que deseja excluir o evento '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    }
  
    function cadastrarEvento (events: any) {
      setCurrentEvents(events);
    }
  
  }
  
  function exibirEvento(eventInfo: { timeText: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; event: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined } }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
  function renderSidebarEvent(event: IEvento) {
    return (
      <li key={event.id}>
        <p>
          {event.title} - &nbsp;
          <strong>{formatDate(event.start, {
             timeZone: 'America/Fortaleza',
             locale: 'pt-BR'
          })}</strong>
        </p>
      </li>
    )
  }
