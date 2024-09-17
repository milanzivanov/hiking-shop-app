/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/");

        if (!response.ok) {
          throw new Error(`Failed to delete product: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
