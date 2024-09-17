function Contact() {
  return (
    <div>
      <section className="contact container">
        <article className="row">
          <h2>Contact us</h2>
        </article>
        <article className="row">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.558856714343!2d19.845699315915745!3d45.25671267909899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10689c3b23fb%3A0x7aa3624a6e540027!2z0JfQvNCw0Zgg0IjQvtCy0LjQvdCwIDI2LCDQndC-0LLQuCDQodCw0LQ!5e0!3m2!1ssr!2srs!4v1619518813557!5m2!1ssr!2srs"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
              <button>Send message</button>
            </form>
            <hr />
            <span>Find us on: </span>
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
    </div>
  );
}

export default Contact;
