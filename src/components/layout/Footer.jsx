import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="">
        <footer className="footer-div text-center text-lg-start bg-body-tertiary text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span className="network">
                Get connected with us on social networks:
              </span>
            </div>

            <div className="social-handle">
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="/" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>
                    <span className="stay-span">Stay</span>cation.
                  </h6>
                  <p>We kaboom your beauty holiday instantly and memorable.</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">For Beginners</h6>
                  <p>
                    <Link to="/payment" className="text-reset">
                      New Account
                    </Link>
                  </p>
                  <p>
                    <Link to="/infor" className="text-reset">
                      Book a Room
                    </Link>
                  </p>
                  <p>
                    <Link to="/payments" className="text-reset">
                      Payments
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Explore Us</h6>
                  <p>
                    <Link to="/about" className="text-reset">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link to="/" className="text-reset">
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link to="/" className="text-reset">
                      Terms &
                    </Link>
                  </p>
                  <p>
                    <Link to="/" className="text-reset">
                      Conditions
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Getting Touch</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> support@stayctation.id
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> 021 - 2208 - 1996
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> Staycation Oy, Jakarta
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" to="https://mdbootstrap.com/">
              Copyright 2019 . All rights reserved . Staycation
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
