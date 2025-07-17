import { Link } from "react-router-dom";

const Cta3 = () => {
    return (
        <div className="cta4">
            <div className="container">
                <div className="cta-bg-area">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="heading4-w">
                                <h2 className="title tg-element-title" style={{ fontSize: "45px" }}>
                                    Let’s Work Together To Build <br /> Something Great!
                                </h2>
                                
                                <div className="space16"></div>
                                
                                <p>
                                    Ready to transform your business with PurpleAI’s innovative AI solutions? Get in touch with us today.
                                </p>

                                <div className="space30"></div>

                                {/* <Link to="/contact" className="theme-btn7">
                                    Contact Us <span><i className="bi bi-arrow-right"></i></span>
                                </Link> */}
                                 <Link className="theme-btn7">
                                    Contact Us <span><i className="bi bi-arrow-right"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <img className="shape1 shape-animaiton3" src="/assets/img/shapes/cta4-shape1.png" alt="" />
                    <img className="shape2 shape-animaiton3" src="/assets/img/shapes/cta4-shape2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cta3;
