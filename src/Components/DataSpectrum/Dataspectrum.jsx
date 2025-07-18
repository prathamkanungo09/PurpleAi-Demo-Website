import data from '../../Data/home4/DataSpectrum.json';
import './data.css';
import SectionTitle2 from '../Common/SectionTitle2';

const heights = [120, 150, 180, 210, 240, 270];
const colors = [
  '#8091caff',
  '#658ae9ff',
  '#5eb8fdff',
  '#4ba3f2',
  '#226fc1',
  '#1f3d7a'
];

const bottomBars = [
  { label: 'Modernization', color: '#003366' },
  { label: 'Visibility & BI', color: '#91d400' },
  { label: 'Insights', color: '#86a343ff' },
  { label: 'Experiments', color: '#af46ff' },
  { label: 'Recommend & Optimize', color: '#6a3eff' },
  { label: 'Automated Decisions at scale', color: '#ff3131' }
];

const DataSpectrum = () => {
  return (
    <div className="">
      <div className="container">
        <div className="heading4 text-center" style={{ marginBottom: '40px' }}>
          <SectionTitle2
            SubTitle="Data Spectrum & Our Offerings"
            Title="Comprehensive Coverage Across The Data Spectrum"
            Description="From foundational data engineering to cognitive AI systems, PurpleAI delivers capabilities across the entire data journey."
          />
        </div>

        <div className="spectrum-items-wrapper">
          {data.map((layer, index) => (
            <div className="spectrum-item" key={index}>
              <div
                className="spectrum-step"
                style={{
                  height: `${heights[index]}px`,
                  backgroundColor: colors[index]
                }}
              >
                <h3>{layer.level}</h3>
                <p className="desc">{layer.desc}</p>
                <ul>
                  {layer.items.map((item, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="spectrum-bar"
                style={{ backgroundColor: bottomBars[index].color }}
              >
                {bottomBars[index].label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataSpectrum;
