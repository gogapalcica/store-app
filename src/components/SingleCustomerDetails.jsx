export const SingleCustomerDetails = ({id,name,lastName,products})=>{
    return(
        <div>
            <h2>Single customer</h2>
            Name: <p>{name}</p>
            Last Name: <p>{lastName}</p>
            Products: <p>{products}</p>
        </div>
    );
}