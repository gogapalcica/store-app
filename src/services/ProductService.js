class ProductService {
    constructor(){
        this.products =[
            {
                id:1,
                name:'mlijeko',
                count:0
            },
            {
                id:2,
                name:'jaja',
                count:0
            },
            {
                id:3,
                name:'ulje',
                count:0
            },
            {
                id:4,
                name:'hljeb',
                count:0
            }
        ];
        this.productId=this.products.length;
    }
    getAll(){
        return this.products;
    }
    get(id){
        return this.products.find((product)=> product.id === Number (id))
    }
    increment(id) {
        const product = this.products.find((product) => product.id === id);
        product.count++;
        return product;
    }
    decrement(id) {
        const product = this.products.find((product) => product.id === id);
        if (product.count <= 0) {
          return false;
        }
        product.count--;
    
        return product;
    }
    search(term) {
        return this.products.filter((product) =>
          product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        );
    }
}
export const productService = new ProductService();