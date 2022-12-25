import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {customerService} from "../services/CustomerService";
import { productService } from "../services/ProductService";
import { SingleCustomerDetails } from "../components/SingleCustomerDetails";

export const SingleCustomer = () =>{

    const {id} = useParams();

    const [customer, setSingleCustomer] = useState(
        customerService.get(id)
    );
    return(
        <div>
            <SingleCustomerDetails
            id = {id}
            name ={customer.name}
            lastName = {customer.lastName}
            products = {customer.products.map(el=>el.name)}/>
        </div>
    );
}