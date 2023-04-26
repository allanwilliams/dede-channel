import { useBase } from '@/contexts/base';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

export default function Tabela() {

    const {setAlertText} = useBase();

    useEffect(() => {
        setAlertText("Alerta na tela de Tabelas")
    }, [])

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
    
    return(<>
        <h1>Tabela</h1>
        <DataTable
            title="Datatables Teste"
            columns={columns}
            data={data}
            selectableRows
            expandableRows
        />
    </>)

}