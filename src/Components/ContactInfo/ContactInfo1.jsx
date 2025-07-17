import { Link } from "react-router-dom";

const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-boxs">
                                <div className="heading1">
                                    <h2>Contact PurpleAI</h2>
                                    <div className="space16"></div>
                                    <p>
                                        We’re here to help you unlock the power of AI for your business.
                                        Reach out to discuss how our expertise can accelerate your success.
                                    </p>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Contact Us</h5>
                                        <a href="tel:+447585756001" className="text">+44 7585 756001</a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Send Us a Mail</h5>
                                        <a href="mailto:info@purpleai.ai" className="text">info@purpleai.ai</a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Office Location</h5>
                                        <p className="text">
                                            34, Sharland Lane <br/>
                                            West Cambourne, Cambridge, Cambridgeshire <br/>
                                            CB23 6LP, United Kingdom
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">
                                                Submit <span><i className="bi bi-arrow-right"></i></span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space100"></div>

            <div className="contact-map-page">
                <iframe
                    src="https://www.google.com/maps?q=34+Sharland+Lane,+West+Cambourne,+Cambridge,+Cambridgeshire+CB23+6LP,+UK&output=embed"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    title="PurpleAI Office Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo1;
