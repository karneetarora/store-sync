'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const CustomersTable = ({data}:any) => {
  const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', flex:1 },
  { field: 'lastName', headerName: 'Last name', flex:1 },
  // {
  //   field: 'birthdate',
  //   headerName: 'Birthdate',
  //   type: 'number',
  //   width: 90,
  // },

  {
    field: 'phone_number',
    headerName: 'Phone Number',
    sortable: true,
    flex:1,
    renderCell: (params) => {
      if(params.value.length === 10){
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2 - $3');
      }
      else{
        return params.value; 
      }
    },
  },
  {
    field: 'email_address',
    headerName: 'Email Address',
    sortable: true,
    flex:1,
  },
  {
    field: 'shipping_address',
    headerName: 'Address',
    sortable: true,
    flex:1,
  },
  {
    field: 'lastest_invoice',
    headerName: 'Last Invoice Number',
    sortable: true,
    flex: 1,
    headerAlign: 'right',
    align: 'right'
  },
  ];
      
      const [rows, setRows] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', phone_number: '1039483948', email_address: 'jon.snow@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-20202139'},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', phone_number: '2301338838', email_address: 'cersei.lanniste4', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'}, 
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', phone_number: '2301338398', email_address: 'jaime.lanniste4', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 4, lastName: 'Stark', firstName: 'Arya', phone_number: '2301338898', email_address: 'arya.stark@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phone_number: '2301338839', email_address: 'daenerys@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 6, lastName: 'Melisandre', firstName: 'Melisandre', phone_number: '2301338398', email_address: 'melisandre.melisandre@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', phone_number: '2301338839', email_address: 'Ferrara.cliff@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 8, lastName: 'Frances', firstName: 'Rossini', phone_number: '2301338839', email_address: 'rossini@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', phone_number: '2301338839', email_address: 'harvey@email.com', shipping_address: '23 Calai Dr. Sante Fe, Cali', lastest_invoice: 'I-202025445'},
      ]);

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <div className="customersTable sm:col-span-10">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                paginationModel={paginationModel}
                //checkboxSelection
            />
        </div>
    )
};

export default CustomersTable;