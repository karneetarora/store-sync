import { Button } from "@mui/material";
import CustomersTable from "./CustomersTable";
import Link from "next/link";

const Customers = () => {
    
    return (
        <div className="customersPage sm:col-span-10">
            <div className="pageHeader">
                <h2 className="pageTitle hidden sm:block">Customers</h2>
                <Link title='Create New Customer Profile' href={'Customers/NewCustomer'}>
                  <Button variant="contained" color="primary">
                     New Customer
                  </Button>
                </Link>
            </div>
            <div className="pageContent">
              <CustomersTable />

            </div>
        </div>
    )
}; 

export default Customers; 