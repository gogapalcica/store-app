import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function SingleCustomer(){
    
    const {customerId} = useParams();

    const [customer, setSingleCustomer] = useState(
        CustomerService.get(customerId)
    );
    return(
        <div>
            <h2>Single customer</h2>
            Name: <p>{customer.name}</p>
            Last Name: <p>{customer.lastName}</p>
        </div>
    );
}