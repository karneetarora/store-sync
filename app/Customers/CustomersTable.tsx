'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const CustomersTable = ({data}:any) => {
  
  const columns: GridColDef[] = [
    { field: 'first_name', headerName: 'First name', flex:1 },
    { field: 'last_name', headerName: 'Last name', flex:1 },
    // {
    //   field: 'birthdate',
    //   headerName: 'Birthdate',
    //   type: 'number',
    //   width: 90,
    // },

    {
      field: 'primary_phone',
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
      
  const [rows, setRows] = useState([]);

  const paginationModel = { page: 0, pageSize: 20 };

    useEffect(() =>{
      setRows(data);
    }, [data]); 

    return (
        <div className="customersTable sm:col-span-10 " style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[10]}
                paginationModel={paginationModel}
                //checkboxSelection
              style={{maxHeight: '425px', overflowY: 'scroll'}}
            />
        </div>
    )
};

export default CustomersTable;