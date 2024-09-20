import { useContext } from "react";
import { Link } from "react-router-dom";

import ProductsContext from "../context/ProductsContext.jsx";

function Products() {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products container">
      <h2>Products Items</h2>
      <article>
        {products.map((product) => {
          return (
            <div className="item" key={product.id}>
              <Link to={`/single/${product.id}`}>
                <img src={product.img} alt="" />
                <h3>{product.name}</h3>
                <p>{product.price} RSD</p>
              </Link>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Products;
