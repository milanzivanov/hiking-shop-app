import { Routes, Route } from "react-router-dom";

// import * as $ from "jquery";

// components
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// pages
import About from "./pages/About";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";

import "../public/css/style.css";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
