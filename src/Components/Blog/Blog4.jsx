import { Link } from "react-router-dom";
import SectionTitle2 from '../Common/SectionTitle2';


const Blog4 = () => {
    return (
        <div className="blog4 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        {/* <div className="heading4">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Customer Stories</span>
                            <h2 className="title tg-element-title">Discover How Our Clients Achieved Success</h2>
                        </div> */}
                        <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
                            <SectionTitle2
                                SubTitle="Customer Stories"
                                Title="Discover How Our Clients Achieved Success"
                            // Description="From foundational data engineering to cognitive AI systems, PurpleAI delivers capabilities across the entire data journey."
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="space30"></div> */}
                <div className="row">

                    <div className="col-lg-6">
                        <div className="blog4-box" data-aos="zoom-in-up" data-aos-duration="900">
                            <div className="image image-anime">
                                <img src="/assets/img/blog/blog4-img1.png" alt="Customer Success Story 1" />
                            </div>
                            <div className="space50"></div>
                            <div className="heading4">
                                <h3><Link>How FinTechPro Scaled to 1M Users</Link></h3>
                                <div className="space16"></div>
                                <p>With our cloud-native architecture, FinTechPro scaled its infrastructure and onboarded 1 million users within 6 months — with 99.99% uptime.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="blog4-box" data-aos="zoom-in-up" data-aos-duration="700">
                            <div className="image image-anime">
                                <img src="/assets/img/blog/blog4-img2.png" alt="Customer Success Story 2" />
                            </div>
                            <div className="space50"></div>
                            <div className="heading4">
                                <h3><Link>RetailX Boosts Sales by 40% Using AI</Link></h3>
                                <div className="space16"></div>
                                <p>RetailX used our AI-powered recommendation engine and witnessed a 40% increase in sales conversions during the festive season.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog4;
