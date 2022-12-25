import { useState } from "react";
import { ProductDetails } from "../components/AppProductDetails";
import { productService } from "../services/ProductService";

export const Products = () => {
  const [products,setProducts]= useState(productService.getAll());
  // const [newProducts, setNewProducts] = useState({
  //   name: ""
  // });

  return (
    <div>
      <h2>Product list</h2>
      <ul>{products.map((product) => 
        (<li key={product.id}><ProductDetails
        name ={product.name}
        /></li>
      ))}
      
      </ul>
    </div>
  );
};
