import { addNewCustomer } from "@/libs/data";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const NewCustomer = () =>{


    return(
        <div className="sm:col-span-10">
            <h2 className="pageTitle hidden text-2xl font-bold sm:block">New Customer</h2>
            <div className="formBox">
                <form action={addNewCustomer} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name="first_name" label='First Name' className="" />
                        <TextField variant="outlined" name="middle_name" label='Middle Name' className="" />
                        <TextField variant="outlined" name='last_name' label='Last Name' className="" />
                    </div>
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name='phone_number' label='Phone Number' className="" />
                        <TextField variant="outlined" name='email_address' label='Email Address' className="" />
                    </div>
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <Select label='Gender' name='gender'>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                        </Select>
                        {/* <DatePicker label='DOB'/> */}
                    </div>
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name='shipping_address' label='Shipping Address' className="" />
                    </div>
                    <div className="flex flex-row gap-8">
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button variant="outlined">Clear</Button>
                    </div>
                </form> 
            </div>
        </div>
    )
}; 

export default NewCustomer;