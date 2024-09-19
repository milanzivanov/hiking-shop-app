import { Link } from "react-router-dom";

import Features from "../utiliti/OwlCarousel";

function Home() {
  return (
    <div>
      <header>
        <article className="rounded">
          <h1>Online outdoor shop, buy online outdoor clothing & trekking</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            magnam, earum a dignissimos libero, illum quo, reprehenderit nostrum
            amet assumenda culpa provident tempore impedit ab et qui excepturi
            fugiat sunt.
          </p>
          <Link className="btn btn-primary" to="/products">
            Order now
          </Link>
        </article>
      </header>

      <section className="featuredItems container">
        <h2>Featured Items</h2>
        <Features />
      </section>

      <section className="subscribe">
        <article className="container d-flex flex-column justify-content-center">
          <h3>Subscribe on Hiking shop now!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Amet vitae atque harum minima sint accusantium optio, laborum
            necessitatibus rem laudantium!
          </p>

          <form
            readOnly
            className="row justify-content-center align-items-center mx-auto"
          >
            <div className="col-md-7 d-flex align-items-center">
              <input
                type="text"
                className="form-control p-2"
                value="email@example.com"
              />
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <button type="submit" className="mt-0 p-2 btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
}

export default Home;
