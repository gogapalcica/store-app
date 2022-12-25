import React from "react";

export const CustomersDetails = ( {name, lastName, onDeleteSingleCustomer} ) => {
    return(
        <div>
            Name: {"\u00A0"} {name} {"\u00A0"}
            {"\u00A0"} Last Name: {"\u00A0"} {lastName} {"\u00A0"}
            <button onClick={onDeleteSingleCustomer}>Remove</button>
        </div>
    )
}