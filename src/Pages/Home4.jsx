import About4 from "../Components/About/About4";
import Blog4 from "../Components/Blog/Blog4";
import Cta3 from "../Components/Cta/Cta3";
import HeroBanner4 from "../Components/HeroBanner/HeroBanner4";
import HowWork3 from "../Components/HowWork/HowWork3";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project3 from "../Components/Project/Project3";
import Services4 from "../Components/Services/Services4";
import Testimonial3 from "../Components/Testimonial/Testimonial3";
import DataSpectrum from "../Components/DataSpectrum/Dataspectrum";
import CollaborationModels from "../Components/CollaborationModels/CollaborationModels";
import AboutUs from "../Components/AboutUs/About";

const Home4 = () => {
    return (
        <div>
            <HeroBanner4
                subtitle="Hi, We are PurpleAI 👋"
                title="Your AI Solution Partner"
                content="Empower your business with AI innovation, from strategic consulting to custom AI development and MLOps solutions."
                btnone="Contact Us"
                // btnoneurl="/contact"
                btntwo="Our Services"
            // btntwourl="/service"
            // shape1="/assets/img/shapes/hero4-image-shape.png"
            />

            {/* <About4
    image1="/assets/img/about/about4-img1.png"
    image2="/assets/img/about/about4-img2.png"
    image3="/assets/img/about/about4-img3.png"
    shape1="/assets/img/shapes/about3-shape1.png"
    subTitle="About PurpleAI 👋"
    Title="AI Consulting, Development, and Innovation"
    content="PurpleAI helps businesses unlock the full potential of artificial intelligence through strategic consulting, customized generative AI development, and robust AI solutions tailored to unique needs."
    expNum="25"
    expCon="Years Experience"
    featurelist={[
        "AI Consulting",
        "Generative AI",
        "MLOps & Deployment",
    ]}
    btnName="Read More"
    btnUrl="/about"
/> */}
            <AboutUs></AboutUs>

            <Services4></Services4>
            <HowWork3></HowWork3>
            {/* <Project3></Project3>
            <Pricing1></Pricing1> */}
            <CollaborationModels></CollaborationModels>
            <Testimonial3></Testimonial3>
            <DataSpectrum></DataSpectrum>
            {/* <Blog4></Blog4> */}
            {/* <Cta3></Cta3> */}
        </div>
    );
};

export default Home4;