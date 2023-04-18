import DataTable from 'react-data-table-component';

export default function Tabela() {

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

    return (
        <DataTable
            title="Datatables Teste"
            columns={columns}
            data={data}
            selectableRows
            expandableRows
        />
    )
}