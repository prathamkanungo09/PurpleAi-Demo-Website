import React from 'react';
import './AboutUs.css';
import SectionTitle2 from '../Common/SectionTitle2';


const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="container">
        {/* <div className="about-header">
          <h2 className="subtitle">About Us</h2>
          <p className="tagline">Our Mission and Vision</p>
        </div> */}
        <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
          <SectionTitle2
            SubTitle="About Us"
            Title="Our Mission and Vision"
            // Description="From foundational data engineering to cognitive AI systems, PurpleAI delivers capabilities across the entire data journey."
          />
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
          <div className="info-card">
            <div className="card-icon">🎯</div>
            <h4 className="card-title">Our Mission</h4>
            <p className="card-desc">
              To democratize AI technology by making it accessible, understandable, and actionable for businesses of all sizes,
              enabling them to thrive in the digital age.
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">🔍</div>
            <h4 className="card-title">Our Vision</h4>
            <p className="card-desc">
              To create a world where AI empowers organizations to make better decisions, automate routine tasks,
              and unlock new opportunities for growth and innovation.
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">💡</div>
            <h4 className="card-title">Our Values</h4>
            <p className="card-desc">
              Integrity, innovation, collaboration, and excellence guide everything we do. We’re committed to ethical AI
              development and transparent partnerships with our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
