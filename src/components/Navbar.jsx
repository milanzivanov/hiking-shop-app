import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="about">About us</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
