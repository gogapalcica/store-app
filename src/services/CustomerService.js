class CustomerService {
    constructor(){
        this.customers=[
            {
                id: 1,
                name: "Goga",
                lastName: "Palackovic",
                products:[{
                    id:3,
                    name:'ulje',
                    count:0
                }]
            },
            {
                id: 2,
                name: "Ljubisa",
                lastName: "Radisic",
                products:[{
                    id:4,
                    name:'hljeb',
                    count:0
                }]
            },
            {
                id: 3,
                name: "Dejana",
                lastName: "Kovalj",
                products:[{
                        id:2,
                        name:'jaja',
                        count:0
                    }]
            },
            {
                id: 4,
                name: "Ana",
                lastName: "Kovalj",
                products:[{
                    id:2,
                    name:'jaja',
                    count:0
                }]
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