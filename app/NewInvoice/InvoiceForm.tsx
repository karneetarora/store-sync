'use client'
import dayjs, { Dayjs } from 'dayjs';
import { Autocomplete, Button, TextareaAutosize, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dummy_Customer_List } from "../../libs/constants";
import { useState } from 'react';

interface InvoiceFormProps {
    customer_name: string;
    invoice_date: Dayjs | null;
    items: any[];
    personal_note: string; 
    client_note: string; 
}

const InvoiceForm = () => { 

    const initalFormData : InvoiceFormProps = {
        customer_name:  '',
        invoice_date: dayjs('2024-12-24'),
        items: [],
        personal_note: '', 
        client_note: '', 
    }; 
    
    const [formData, setFormData] = useState(initalFormData); 

    const handleUserInput = (field: string, value: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value
        })
    )};

    return (
        <form className='grid grid-cols-1 gap-x-2 gap-y-4 py-2 sm:grid-cols-6'>
            <div className='hidden sm:block col-span-full'>
                <h1 className='text-2xl font-bold'>New Invoice</h1>
            </div>
            <Autocomplete
                disablePortal
                options={Dummy_Customer_List}
                freeSolo
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                onChange={(event, value) =>{handleUserInput('customer_name', value)}}
                sx={{ width: 300 }}
                renderInput={(params:any) =>  <TextField {...params} label="Customer" />}
                className='!w-full sm:col-span-3'
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Invoice Date" className='col-span-full sm:col-span-3' onChange={(e:any) =>{handleUserInput('invoice_date', (dayjs(e).format('YYYY/MM/DD')))}}/>
            </LocalizationProvider>
            <TextField label='Client Note' 
              placeholder='Client specified requests, will also be displayed on receipt.'
              multiline
              onChange={(e:any)=>{handleUserInput('client_note', e.target.value)}}
              className='col-span-2'
            />
            <TextField label='Internal: Store Note' 
              placeholder='Will not be displayed to customer.'
              multiline
              onChange={(e:any)=>{handleUserInput('personal_note', e.target.value)}}
              className='col-span-2'
            />
            <div className="actions flex flex-row gap-4 col-span-full justify-end">
                <Button variant='contained'>Cancel</Button>
                <Button variant='contained' onClick={()=>{console.log(formData)}} >Save</Button>
            </div>
        </form>
    )
};

export default InvoiceForm;