'use server'

import { FormEvent } from "react";

export async function getCustomers(query:string) {
  try {
    //const invoiceCountPromise = sql`SELECT (*) FROM CUSTOMERS`;
    //const customerPromise = sql`SELECT * FROM CUSTOMERS WHERE name LIKE ${'%' + query + '%'} LIMIT 10`;
  }
  catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
}; 

export async function addNewCustomer(formData:any){
  // const form = new FormData(event.currentTarget);
  // console.log(form.get('first_name'))
  const firstName = formData.get('first_name'); 
  console.log('first_name:' + firstName); 

}