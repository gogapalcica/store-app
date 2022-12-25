import React from "react";
import { Link } from "react-router-dom";

export const CustomersDetails = ( {id, name, lastName, onDeleteSingleCustomer} ) => {
    return(
        <div>
            Name: {"\u00A0"} {name} {"\u00A0"}
            {"\u00A0"} Last Name: {"\u00A0"} {lastName} {"\u00A0"}
            <button onClick={onDeleteSingleCustomer}>Remove</button>
            <Link to = {`/customers/${id}`}>Latest Purchases</Link>
        </div>
    )
}