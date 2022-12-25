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
        this.productId=this.products.length +1;
    }
    getAll(){
        return this.products;
    }
    get(id){
        return this.products.find((product)=> product.id === Number (id))
    }

}
export const productService = new ProductService();