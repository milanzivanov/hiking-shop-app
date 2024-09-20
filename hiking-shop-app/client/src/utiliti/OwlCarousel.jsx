import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";

const Features = () => {
  const { products } = useContext(ProductsContext);

  if (!products.length) return null;

  const options = {
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false,
    dots: true
  };

  return (
    <OwlCarousel
      className="owl-theme section"
      loop
      margin={20}
      autoplay
      {...options}
    >
      {products.map((product) => {
        console.log(product);
        return (
          <div className="review item" key={product.id}>
            <div className="review-img">
              <Link to={`/single/${product.id}`}>
                <>
                  <h3>{product.name}</h3>
                  <p>{product.price},00 RSD</p>
                  <img src={product.img} alt={product.name} />
                </>
              </Link>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default Features;

// <div className="review item">
//   <div className="review-img">
//     <a href="single.html">
//       <h3>Jacket</h3>
//       <p>$210.00</p>
//       <img src="../../public/img/jackets.jpg" alt="jacket" />
//     </a>
//   </div>
// </div>
