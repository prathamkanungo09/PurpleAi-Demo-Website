import About4 from "../Components/About/About4";
import Blog4 from "../Components/Blog/Blog4";
import Cta3 from "../Components/Cta/Cta3";
import HeroBanner4 from "../Components/HeroBanner/HeroBanner4";
import HowWork3 from "../Components/HowWork/HowWork3";
import Pricing1 from "../Components/Pricing/Pricing1";
// import Project3 from "../Components/Project/Project3";
import Services4 from "../Components/Services/Services4";
import Testimonial3 from "../Components/Testimonial/Testimonial3";
import DataSpectrum from "../Components/DataSpectrum/Dataspectrum";
import CollaborationModels from "../Components/CollaborationModels/CollaborationModels";
import AboutUs from "../Components/AboutUs/About";
// import CustomerStories from "../Components/CustomerStories/CustomerStories";

const Home4 = () => {
    return (
        <div>
            <HeroBanner4
                subtitle="Deploy. Operate. Scale — with Industry-Fit AI."
                title="AI-First solution for Adaptive, Self Governing Enterprises"
                content="Enabling Intelligent Autonomy for Business Transformation."
                btnone="Request Consultation"
                // btnoneurl="/contact"
                btntwo="Our Services"
                
            />

            <AboutUs />
            <Cta3 />

            {/* ✅ Wrap the Services4 component with a div that has an id */}
            <div id="services-section">
                <Services4 />
            </div>

            <HowWork3 />
            {/* <Project3 />
            <Pricing1 /> */}
             <div style={{ textAlign: "center", marginBottom: "80px" }}>
                <img
                    src="/assets/img/others/12.png" 
                    alt="Capabilities Graphic"
                    style={{ width: "100%", maxWidth: "1450px", height: "auto" }}
                />
            </div>
            <CollaborationModels />
            <Blog4 />
            <DataSpectrum />
            <Testimonial3 />
        </div>
    );
};

export default Home4;
