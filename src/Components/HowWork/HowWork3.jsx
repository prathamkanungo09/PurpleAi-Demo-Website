import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/home4/work4.json';
import SectionTitle2 from '../Common/SectionTitle2';

const HowWork3 = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 6);

  return (
    <div className="work4 sp" >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading4">
              <SectionTitle2
                SubTitle="Our Capabilities"
                Title="Unlocking Business Potential Through AI Expertise"
              />
            </div>
          </div>
        </div>

        <div className="space30"></div>

        <div className="row">
          {visibleData.map((item, i) => {
            // Determine if this card is part of the "newly revealed" set
            const isAnimated = showAll && i >= 6;
            return (
              <div
                key={i}
                className={`col-lg-4 col-md-6 ${isAnimated ? 'fade-slide-up' : ''}`}
                data-aos="zoom-in-up"
                data-aos-duration="1200"
              >
                <div className={item.addClass}>
                  <span className="after">{item.subtitle}</span>
                  <h4>
                    <Link>{item.title}</Link>
                  </h4>
                  <div className="space16"></div>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && data.length > 6 && (
          <div className="text-center mt-4">
            <button
              className="btn btn-purple-blue"
              onClick={() => setShowAll(true)}
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowWork3;
