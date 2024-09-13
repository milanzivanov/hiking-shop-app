import { useContext } from "react";

import ProductsContext from "../context/ProductsContext";
import CartContext from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

function Single() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  // selecting single product
  let product = products.filter((p) => {
    if (p.id === +params.id) {
      return p;
    }
  })[0];

  // creating option menu
  let option = [];

  for (let i = 1; i < product.qty; i++) {
    option.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  // creating category for viewing
  let categoryElement = [];
  console.log(product.category);
  let categoryTemporery = product.category.split(","); // this is array
  console.log(categoryTemporery);

  categoryTemporery.forEach((element, index) => {
    if (categoryTemporery.length !== index + 1) {
      categoryElement.push(
        <a key={index} href="#">
          {element.trim(
            <a key={index} href="#">
              {element.trim()}
            </a>
          )}
          ,
        </a>
      );
    } else {
      categoryElement.push();
    }
  });

  //
  const addToCart = (event) => {
    event.preventDefault();
  };

  return (
    <section className="single container">
      <article className="row">
        <h2>Single product</h2>
      </article>
      <article className="row">
        <div>
          <img src={`${product.img}`} alt="image" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <div className="price">${product.price}</div>
          <p>{product.desc}</p>
          <form onSubmit={addToCart}>
            <label>Quantity</label>
            <select name="selectQty">{option}</select>
            <button>Order now</button>
          </form>
          <hr />
          <p>
            Category: {categoryElement}
            <a href="">Men</a>, <a href="">Boots</a>
          </p>
          <hr />
          <span>Share: </span>
          <span>
            <a href="">
              <i className="fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i className="fab fa-pinterest"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
        </div>
      </article>
    </section>
  );
}

export default Single;
