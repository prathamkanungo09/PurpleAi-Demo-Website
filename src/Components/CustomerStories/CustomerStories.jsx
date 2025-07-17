import React from 'react';
import './CustomerStories.css';
import SectionTitle2 from '../Common/SectionTitle2';


const CustomerStories = () => {
  return (
    <div className="customer-stories-wrapper">
     <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
          <SectionTitle2
            SubTitle="Customer Stories"
            Title="Flexible Engagement Models to Fit Your Needs"
            // Description="From foundational data engineering to cognitive AI systems, PurpleAI delivers capabilities across the entire data journey."
          />
        </div>
      <div className="story-banner">
        <div className="story-image">
          <img src="/images/customer1.jpg" alt="Customer meeting" />
          <div className="nda-badge">NDA</div>
        </div>
        <div className="story-content">
          <h3>Upgrading AI into the production-ready stage with microservice-based MLOps</h3>
          <p>
            A multinational company providing a complete marketing automation SaaS platform was already familiar with
            Machine Learning and Artificial Intelligence but was looking for a way to bring its AI algorithm to the next
            production-ready level. Adaptop turned out to be the best partner to do that ...
          </p>
          <button className="read-more" disabled>
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
