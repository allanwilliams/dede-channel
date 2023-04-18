import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useBase } from '../../contexts/base'
import ModalSistema from '../../components/modal/Modal';

ChartJS.register(ArcElement, Tooltip, Legend);


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



export default function Inicial() {
    const { setModalText, setAlertOpen, setAlertText, setAlertVariant } = useBase();

    useEffect(() => {
        setAlertOpen(true);
        setAlertVariant('primary');
        setAlertText('Olá, sou um alert contextualizado!')
        setModalText('asasssdsdaas');
    }, [])

    return (
        <div>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Tela Inicial </h1>                            
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
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
                        
                    </div>
                    
                    <div className="col-lg-3 col-12">
                        <Pie data={dataChart} />
                    </div>
                </div>
                    
            </section>
        </div>
    )
  }
