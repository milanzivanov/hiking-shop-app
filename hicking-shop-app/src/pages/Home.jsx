import { Link } from "react-router-dom";

import Features from "../utiliti/OwlCarousel";

function Home() {
  return (
    <div>
      <header>
        <article>
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
        <article className="container">
          <h3>Subscribe on Hiking shop now!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Amet vitae atque harum minima sint accusantium optio, laborum
            necessitatibus rem laudantium!
          </p>
          <form>
            <input type="text" placeholder="Your email..." />
            <input type="submit" value="Subscribe" />
          </form>
        </article>
      </section>
    </div>
  );
}

export default Home;
