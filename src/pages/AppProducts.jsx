import { useState } from "react";
import { ProductDetails } from "../components/AppProductDetails";
import { productService } from "../services/ProductService";

export const Products = () => {
  const [products,setProducts]= useState(productService.getAll());
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchProducts = (searchTerm) => {
    setSearchTerm(searchTerm);
    setProducts(productService.search(searchTerm));
  };
  
  

  return (
    <div>
      <h2>Product list</h2>
      <p>Search product</p>
      <input
        value={searchTerm}
        onChange={({ target }) => handleSearchProducts(target.value)}
      />
      <ul>{products.map((product) =>(
      <li key={product.id}><ProductDetails
        name ={product.name}
        
      /></li>
      ))}
      </ul>
    </div>
  );
};
