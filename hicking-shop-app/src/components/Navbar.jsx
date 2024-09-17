import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import ProductsContext from "../context/ProductsContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products ({products.length})</NavLink>
        </li>
        <li>
          <NavLink to="about">About us</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart ({cart.length})</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
