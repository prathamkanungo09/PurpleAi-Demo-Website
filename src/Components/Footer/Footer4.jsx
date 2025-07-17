import { Link } from "react-router-dom";

const Footer4 = () => {
  return (
    <div className="footer4 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              {/* <div className="footer-logo">
                                <Link to="/">
                                    <img src="/assets/img/logo/header4-logo.png" alt="PurpleAI Logo" />
                                </Link>
                            </div> */}
              <div>
                <h2
                  className="footer-logo-title fontcolor"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  PurpleAI
                </h2>

              </div>
              <div className="space20"></div>
              <div className="heading4">
                <p>
                  At PurpleAI, we help businesses unlock the power of artificial intelligence through expert consulting, custom solutions, and innovative AI technologies tailored to your unique needs.
                </p>
              </div>
              <ul className="social-icon">
                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Services We Offer</h3>
              <ul className="menu-list">
                <li><Link to="/service/service-details">AI Consulting</Link></li>
                <li><Link to="/service/service-details">Generative AI</Link></li>
                <li><Link to="/service/service-details">AI Development</Link></li>
                <li><Link to="/service/service-details">Data Engineering</Link></li>
                <li><Link to="/service/service-details">MLOps</Link></li>
                <li><Link to="/service/service-details">AI Assist</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>
              <ul className="menu-list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/service">Our Services</Link></li>
                <li><Link to="/blog">Blog & News</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                </div>
                <div className="pera">
                  <a href="tel:+447585756001">+44 7585 756001</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                </div>
                <div className="pera">
                  <a href="mailto:info@purpleai.ai">info@purpleai.ai</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                </div>
                <div className="pera">
                  <p>
                    34, Sharland Lane<br />
                    West Cambourne, Cambridge<br />
                    Cambridgeshire, CB23 6LP
                  </p>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                </div>
                <div className="pera">
                  <a href="https://www.purpleai.ai" target="_blank" rel="noreferrer">
                    www.purpleai.ai
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="space70"></div>
      </div>

      <div className="copyright-area _relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright ©2024 PurpleAI. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
