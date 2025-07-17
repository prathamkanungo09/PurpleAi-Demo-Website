import React from 'react';
import './AboutUs.css';
import SectionTitle2 from '../Common/SectionTitle2';
import { useInView } from 'react-intersection-observer';
import { AiOutlineAim } from 'react-icons/ai';
// import { FiSearch } from 'react-icons/fi';
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

const cardData = [
  {
  icon: <AiOutlineEye />,
  title: 'Our Vision',
  desc:
    'To create a world where AI empowers organizations to make better decisions, automate routine tasks, and unlock new opportunities for growth and innovation.',
},

  {
    icon: <AiOutlineAim />,
    title: 'Our Mission',
    desc:
      'To democratize AI technology by making it accessible, understandable, and actionable for businesses of all sizes, enabling them to thrive in the digital age.',
  },
  {
    icon: <BsLightbulb />,
    title: 'Our Values',
    desc:
      'Integrity, innovation, collaboration, and excellence guide everything we do. We’re committed to ethical AI development and transparent partnerships with our clients.',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="container">
        <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
          <SectionTitle2 SubTitle="About Us" Title="Our Mission and Vision" />
        </div>

        <div className="story-section">
          <h3 className="story-title">Our Story</h3>
          <p className="story-text">
            Founded in 2022, PurpleAI was born from a vision to make advanced AI accessible to businesses of all sizes.
            Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive
            real results.
          </p>
          <p className="story-text">
            We believe in the transformative power of AI when applied thoughtfully and ethically. Our approach focuses
            on creating practical, scalable solutions that solve real business challenges.
          </p>
        </div>

        <div className="cards-row">
          {cardData.map((card, index) => {
            const delay = index * 0.2;
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`info-card ${inView ? 'animated-card' : ''}`}
                style={{ animationDelay: `${delay}s` }}
              >
                <div className="card-icon">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
