import React from 'react';
import './CollaborationModels.css';
import SectionTitle2 from '../Common/SectionTitle2';


const models = [
  {
    title: 'Solution providing',
    description:
      'We deliver partially-ready or tailor-made data solutions that comprehensively handle our clients’ specific business with given time and budget.',
  },
  {
    title: 'Collaborative model',
    description:
      'Our team joins forces with the client’s team to build solution fully aligned with the business goals and in-house needs of the company.',
  },
  {
    title: 'Managed & Delivery Services',
    description:
      'As the next level after solution providing, managed & delivery services entail entrusting the whole AI or data management system to Adaptap.',
  },
  {
    title: 'We are flexible!',
    description: 'You need a more unique approach?',
  },
];

const CollaborationModels = () => {
  return (
    <div className="">
      {/* <h2 className="collab-title">Collaboration Models</h2> */}
      <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
          <SectionTitle2
            SubTitle="Collaboration Models"
            Title="Flexible Engagement Models to Fit Your Needs"
            // Description="From foundational data engineering to cognitive AI systems, PurpleAI delivers capabilities across the entire data journey."
          />
        </div>
      <div className="collab-grid">
        {models.map((model, idx) => (
          <div key={idx} className="collab-card">
            <h5>{model.title}</h5>
            <p>{model.description}</p>
            <span className="plus-icon">+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationModels;
