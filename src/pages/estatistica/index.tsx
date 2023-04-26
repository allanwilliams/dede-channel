

import { useEffect } from 'react';
import { useBase } from '../../contexts/base';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale , LinearScale, registerables} from 'chart.js';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';

export default function Estatistica(){
    ChartJS.register(...registerables, ArcElement, Tooltip, Legend, CategoryScale, LinearScale);
    const { setAlertText } = useBase();

    useEffect(() => {
        setAlertText("Alerta na tela de Estatística")
    }, [])

    const dataChart = {
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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            }
        }
    };
        
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
        labels,
        datasets: [
        {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
        ],
    };
  
    return (<>
        <div className='row'>
            <div className='col-lg-12 col-12'>
                <Bar options={options} data={data} />
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className="col-lg-6 col-12">
                <Pie data={dataChart} />
            </div>
            <div className="col-lg-6 col-12">
                <Doughnut data={dataChart} />
            </div>
        </div>
    </>)
}