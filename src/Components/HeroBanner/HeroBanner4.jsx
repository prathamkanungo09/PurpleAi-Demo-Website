import { Link } from "react-router-dom";
import Slider from "react-slick";
import parse from 'html-react-parser';

const HeroBanner4 = ({ subtitle, title, content, btnone, btnoneurl, btntwo, btntwourl, shape1 }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="hero4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-heading">
              <span className="span" style={{ fontSize: '24px', fontWeight: '600' }}>{subtitle}</span>
              <h1>{title}</h1>
              <p>{parse(content)}</p>

              <div className="space30"></div>
              <div className="buttons">
                <Link className="theme-btn5" to={btnoneurl}>{btnone} <span><i className="bi bi-arrow-right"></i></span></Link>
                <Link className="theme-btn6" to={btntwourl}>{btntwo} <span><i className="bi bi-arrow-right"></i></span></Link>
              </div>

              <div className="slider-area">
                <h3>Technology Ecosystem We Work With</h3>
                <div className="logo-slider owl-carousel hero_gap_3">
                  <Slider {...settings}>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Data Integration
                      </h4>
                    </div>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Data Management
                      </h4>
                    </div>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Compute Framework
                      </h4>
                    </div>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Mining & Analytics
                      </h4>
                    </div>
                    {/* <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#e91e63',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Hosting Services
                      </h4>
                    </div> */}
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Data Visualization
                      </h4>
                    </div>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        Marketing Analytics
                      </h4>
                    </div>
                    <div className="single-slider">
                      <h4 style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#673ab7',
                        background: '#f3f3f3',
                        padding: '20px',
                        borderRadius: '8px',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        AI/Data Science
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>


              <img className="image-shape shape-animaiton3" src={shape1} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="main-image">
              <img src="/assets/img/hero/hero4-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner4;