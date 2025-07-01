import { addNewCustomer } from "@/libs/data";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const NewCustomer = () =>{


    return(
        <div className="sm:col-span-10">
            <h2 className="pageTitle hidden text-2xl font-bold sm:block">New Customer</h2>
            <p className="mb-4">
                Please fill out all fields below to create a new customer profile, the information you provide will be used for receipts and shipping purposes.
            </p>
            <div className="formBox sm:w-8/10">
                <form action={addNewCustomer} className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name="first_name" label='First Name' required className="sm:w-1/3" />
                        <TextField variant="outlined" name="middle_name" label='Middle Name' className="sm:w-1/3" />
                        <TextField variant="outlined" name='last_name' label='Last Name' required type='' className="sm:w-1/3" />
                    </div>
                    <div className="flex flex-col gap-y-6 sm:flex-row gap-x-8">
                        <TextField variant="outlined" name='phone_number' label='Phone Number' type="tel" required className="sm:w-1/3" />
                        <TextField variant="outlined" name='email_address' label='Email Address' type='email' className="sm:w-2/3" />
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