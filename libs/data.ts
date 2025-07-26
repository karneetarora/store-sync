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

export async function addNewCustomer(formData:FormData){
//two way to extract values from form 
  //const firstName = formData.get('first_name'); 

     for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    } 

}