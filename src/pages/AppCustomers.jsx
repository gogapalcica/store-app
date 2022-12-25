import {useState} from "react";
import {customerService} from "../services/CustomerService";
import {CustomersDetails} from "../components/AppCustomerDetails"


export const Customers = () => {
  const [customers,setCustomers] = useState(customerService.getAll());
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    lastName: "",
  });
  const handlerDeleteSingleCustomer = (id) =>{
    if(customerService.delete(id)){
      setCustomers(customerService.getAll());
    }
  };
  const handlerOnCreateNewCustomer = (e) =>{
    if(newCustomer.name && newCustomer.lastName){
      e.preventDefault()
      setCustomers(customerService.create(newCustomer));
    }
  }

  return (
    <div>
      <form onSubmit={handlerOnCreateNewCustomer}>
        <input
          type="text"
          value={newCustomer.name}
          onChange={({ target }) =>
            setNewCustomer({ ...newCustomer, name: target.value })
          }
        />
        <input
          type="text"
          value={newCustomer.lastName}
          onChange={({ target }) =>
            setNewCustomer({ ...newCustomer, lastName: target.value })
          }
        />
        <button type="submit">Submit</button>
        </form>
      <div>
      <h2>Customer list</h2>
      <ul>
        {customers.map((customer) => 
          (<li key={customer.id}><CustomersDetails
            name={customer.name}
            lastName={customer.lastName}
            onDeleteSingleCustomer = {() => {handlerDeleteSingleCustomer(customer.id)}}
          /></li>
))}
    </ul>
      </div>
    </div>
  );
}
