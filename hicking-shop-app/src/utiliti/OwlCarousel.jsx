import OwlCarousel from "react-owl-carousel";

const Features = () => {
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
    nav: true,
    dots: false
  };

  return (
    <OwlCarousel
      className="owl-theme section"
      loop
      margin={20}
      autoplay
      {...options}
    >
      {/* 1 */}
      <div className="review item">
        <div className="review-img">
          <a href="single.html">
            <h3>Boots</h3>
            <p>$210.00</p>
            <img src="../../public/img/boots.jpg" alt="boots" />
          </a>
        </div>
      </div>

      {/* 2 */}
      <div className="review item">
        <div className="review-img">
          <a href="single.html">
            <h3>Jacket</h3>
            <p>$210.00</p>
            <img src="../../public/img/jackets.jpg" alt="jacket" />
          </a>
        </div>
      </div>

      {/* 3 */}
      <div className="review item">
        <div className="review-img">
          <a href="single.html">
            <h3>Pants</h3>
            <p>$100.00</p>
            <img src="../../public/img/pants.jpg" alt="hiking pants" />
          </a>
        </div>
      </div>

      {/* 4 */}
      <div className="review item">
        <div className="review-img">
          <a href="single.html">
            <h3>Poles</h3>
            <p>$50.00</p>
            <img src="../../public/img/poles.jpg" alt="poles" />
          </a>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Features;
