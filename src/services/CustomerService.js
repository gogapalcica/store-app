class CustomerService {
    constructor(){
        this.customers=[
            {
                id: 1,
                name: "Goga",
                lastName: "Palackovic",
            },
            {
                id: 2,
                name: "Ljubisa",
                lastName: "Radisic",
            },
            {
                id: 3,
                name: "Dejana",
                lastName: "Kovalj",
            },
            {
                id: 4,
                name: "Ana",
                lastName: "Kovalj",
            },
        ];
        this.nextId=this.customers.length +1;
    }
    getAll(){
        return this.customers;
    }

    get(id){
        return this.customers.find((customer) => customer.id === Number(id));
    }

    delete(id){
        const customerIndex = this.customers.filter(customer => customer.id !== id)
        this.customers = customerIndex
        return true;
    }
    create(newCustomer){
        newCustomer.id = this.nextId;
        this.customers = [...this.customers, newCustomer];
        this.nextId++;

        return this.customers;
    }
}
export const customerService = new CustomerService();