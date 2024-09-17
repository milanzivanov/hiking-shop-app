import { NavLink } from "react-router-dom";

function Footer() {
  const date = new Date();

  return (
    <footer>
      <article className="container">
        <h3>
          <a href="index.html" className="logo">
            <i className="fas fa-hiking"></i>Hiking shop
          </a>
        </h3>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>
        <div className="icons">
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
      <article>
        <p>&copy; Hiking shop {date.getFullYear()}.</p>
      </article>
    </footer>
  );
}

export default Footer;
