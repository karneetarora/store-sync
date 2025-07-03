import { Button, TextField } from "@mui/material";
import CustomersTable from "./CustomersTable";
import Link from "next/link";
import { Download, FilterList, PersonAdd } from "@mui/icons-material";
import SearchBar from "../Components/SearchBar"
import { getCustomers } from "@/libs/data";

const Customers =  async (
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
) => {

    const query = (await searchParams)?.query || '';
    const currentPage = Number((await searchParams)?.page) || 1;


    //const data = await fetchFilteredData(query, currentPage);
    //const custData = await getCustomers(query); 

    return (
        <div className="customersPage sm:col-span-10 px-2">
            <div className="pageHeader">
                {/* <h2 className="pageTitle hidden sm:block">Customers</h2> */}
                <h2 className="hidden text-2xl font-bold sm:block ">Customers</h2>                
                <div className="">
                  <SearchBar placeholder="Search Customer"/>
                </div>
                <Link title='Create New Customer Profile' href={'Customers/NewCustomer'}>
                  <Button variant="contained" color="primary" className="mainBtn" endIcon={<PersonAdd className=""/>}>
                     <p className="hidden md:block">
                        New Customer
                     </p>
                  </Button>
                </Link>
            </div>
            <div className="flex flex-col flex-row justify-between items-center">
              <p className="pageDescription m-0 text-xs sm:text-sm">
                  Manage your customers and their orders or create a new customer profile.
              </p>
              <div className="table-btns flex flex-row gap-2 my-2 sm:my-0">
                <Button variant="text" size="small" endIcon={<Download className="!text-sm !sm:text-md"/>} className="grow-1">
                  <span className="hidden md:block">Download</span>
                </Button>
              </div>
            </div>
            <div className="pageContent">
              <CustomersTable data={null}/>

            </div>
        </div>
    )
}; 

export default Customers;