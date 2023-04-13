import React, { Component, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { format, addDays } from 'date-fns';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBase } from '../../contexts/base'
import ModalSistema from '../../components/modal/Modal';

ChartJS.register(ArcElement, Tooltip, Legend);

const columns = [
    {
        name: 'Texto',
        selector: (row: { title: any; }) => row.title,
        sortable: true,
    },
    {
        name: 'Ano',
        selector: (row: { year: any; }) => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

export const dataChart = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

const dateFns = format(new Date(), 'dd/MM/yyyy')


export default function Inicial() {
    const { setModalText, setAlertOpen, setAlertText, setAlertVariant } = useBase();

    useEffect(() => {
        setAlertOpen(true);
        setAlertVariant('primary');
        setAlertText('Olá, sou um alert contextualizado!')
        setModalText('asasssdsdaas');
    }, [])


    let state = {
        canDrop: true,
        calendarWeekends: true,
        calendarEvents: [
            { title: "Evento 1", start: new Date() },
            { title: "Evento 2", start: addDays(new Date(), 3) },
            { title: "Evento 3", start: addDays(new Date(), 2) }
        ]
    };

    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Tela Inicial</h1>
                                {dateFns}
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="row">   

                        {/* <AlertBootstrap variant='success'></AlertBootstrap> */}

                        {/* <div className="col-lg-3 col-12">
                            <AlertCustom variant="success" texto="Usuário criado"></AlertCustom>
                        </div>
                        <div className="col-lg-3 col-12">
                            <AlertCustom variant="danger"  texto="Usuário erro"></AlertCustom>
                        </div>
                        <div className="col-lg-3 col-12">
                            <AlertCustom variant="warning"  texto="Usuário com ressalvas"></AlertCustom>
                        </div>
                        <div className="col-lg-3 col-12">
                            <AlertCustom variant="primary"  texto="Usuário atualizado"></AlertCustom>
                        </div> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <FullCalendar
                                editable={true}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                weekends={state.calendarWeekends}
                                events={state.calendarEvents}
                                locale = {'pt-BR'}
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <ul>
                                <li>Bootstrap</li>
                                <li>DataTables</li>
                                <li>ChartJS</li>
                                <li>Date FNS</li>
                                <li>Full Calendar</li>
                            </ul>
                            <ModalSistema/>
                        </div>
                    </div>
                                
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-lg-9 col-12'>
                            <DataTable
                                title="Datatables Teste"
                                columns={columns}
                                data={data}
                                selectableRows
                                expandableRows
                            />
                        </div>
                        
                        <div className="col-lg-3 col-12">
                            <Pie data={dataChart} />
                        </div>
                    </div>
                        
                </section>
                <hr /><hr /><hr /><hr />
            </div>
        </div>
    )
  }
