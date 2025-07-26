'use client'
import { addNewCustomer } from "@/libs/data";
import { ArrowBack } from "@mui/icons-material";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Link from "next/link";
import { useState } from "react";

const NewCustomer = () =>{
    const[errors, setError] = useState([]);

    // const newProfile = {
    //     first_name: '', 
    //     middle_name: '', 
    //     last_name: '', 
    //     phone_number: '', 
    //     email_address: '', 
    //     shipping_address: '', 
    // }; 

        const [newProfile, setNewProfile] = useState({
        first_name: '', 
        middle_name: '', 
        last_name: '', 
        phone_number: '', 
        email_address: '', 
        shipping_address: '', 
    }); 

    //check fields --- this will need to be moved to somewhere 
    if(!newProfile.first_name){
        console.log('First name cannot be empty');
        //setError((prevState:any) => [prevState, {field: 'first_name', msg: 'First name cannot be empty'}]);
    }
    else if(newProfile.first_name.length <= 2)
        console.log('First name has to have more than 2 characters')

    //need to sanitize data then do other final validations 

    //this regex is not working to only allow letters
    else if(/^[A-Za-z]+$/.test(newProfile.first_name)){
        console.log('First name cannot contain numbers')
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        //addNewCustomer(data);
    }



    return(
        <div className="actual-content sm:px-2">
            <Link href={'/Customers'} className="flex flex-row gap-1 my-2 underline !text-xs items-center" style={{color: '#1976d2'
            }}>
                <ArrowBack fontSize='small' className="!text-xs "/>
                Back
            </Link>
            <h2 className="pageTitle my-2 hidden text-2xl font-bold sm:block">New Customer</h2>
            <p className="pageDescription md:!mb-4 text-sm lg:text-md">
                Please fill out all fields below to create a new customer profile, the information you provide will be used for receipts and shipping purposes.
            </p>
            <div className="formBox w-full lg:w-10/12">
                <form action={(e:any) =>{handleSubmit(e)}} className="flex flex-col gap-4 md:gap-8">
                {/* <form action={addNewCustomer} className="flex flex-col gap-4 md:gap-8"> */}
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name="first_name" label='First Name' inputMode="text" required className="sm:w-1/3" />
                        <TextField variant="outlined" name="middle_name" label='Middle Name' inputMode="text" className="sm:w-1/3" />
                        <TextField variant="outlined" name='last_name' label='Last Name' inputMode="text" required type='' className="sm:w-1/3"/>
                    </div>
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name='phone_number' inputMode="tel" label='Phone Number' type="tel" required className="sm:w-1/3" />
                        <TextField variant="outlined" name='email_address' label='Email Address' inputMode="email" type='email' className="sm:w-2/3" />
                    </div>
                    {/* <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <Select label='Gender' name='gender'>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                        </Select>
                        <DatePicker label='DOB'/> 
                    </div> */}
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name='shipping_address' label='Shipping Address' className="w-full" />
                    </div>
                    <div className="flex flex-row gap-8 justify-end">
                        <Button variant="outlined" type="reset">Clear</Button>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </form> 
            </div>
        </div>
    )
}; 

export default NewCustomer;