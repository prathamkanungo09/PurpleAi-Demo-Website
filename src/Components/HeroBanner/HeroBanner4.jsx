import parse from 'html-react-parser';

const HeroBanner4 = ({
  subtitle,
  title,
  content,
  btnone,
  btnoneurl,
  btntwo,
  shape1,
  expertiseHighlights
}) => {

  const scrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techData = [
    "Data Integration",
    "Data Management",
    "Compute Framework",
    "Mining & Analytics",
    "Data Visualization",
    "Marketing Analytics",
    "AI / Data Science"
  ];

  return (
    <div className="hero4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="main-heading">
              <span className="span" style={{ fontSize: '24px', fontWeight: '600' }}>
                Hi, We are PurpleAI 👋
              </span>
              <span
  className="subtitle-text"
  style={{
    fontSize: '24px',
    fontWeight: '600',
    display: 'block',
    color: '#8000ff',
  }}
>
  {subtitle}
</span>

              <h1 style={{ fontSize: '50px', fontWeight: '800' }}>{title}</h1>

              {expertiseHighlights && (
                <div style={{
                  margin: '20px 0',
                  fontSize: '28px',
                  fontWeight: '600',
                  padding: '10px 0',
                }}>
                  {expertiseHighlights}
                </div>
              )}

              <p>{parse(content)}</p>

              <div className="space30"></div>
              <div className="buttons" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '20px',
              }}>
                <a
                  className="theme-btn5"
                  href={btnoneurl}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '700',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    backgroundColor: '#6E18EF',
                    textDecoration: 'none',
                    transition: 'all 0.4s',
                  }}
                >
                  {btnone}
                  <span style={{
                    display: 'inline-block',
                    height: '40px',
                    width: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    color: '#6E18EF',
                    textAlign: 'center',
                    lineHeight: '40px',
                    marginLeft: '8px',
                    transform: 'rotate(-45deg)',
                  }}>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>

                <button
                  className="theme-btn6"
                  onClick={scrollToServices}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#0B0F19',
                    fontSize: '18px',
                    fontWeight: '700',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    backgroundColor: '#E7EAF3',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s',
                  }}
                >
                  {btntwo}
                  <span style={{
                    display: 'inline-block',
                    height: '40px',
                    width: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    color: '#0B0F19',
                    textAlign: 'center',
                    lineHeight: '40px',
                    marginLeft: '8px',
                    transform: 'rotate(-45deg)',
                  }}>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>

              <div className="slider-area" style={{ marginTop: '40px', }}>
                <h3>Technology Ecosystem We Work With</h3>

                {/* All Button
                <button className="ecosystem-all-btn">
                  All
                </button> */}

                {/* Tech items grid */}
                <div className="tech-grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
                  {techData.map((text, i) => (
                    <div className="tech-box" key={i}>{text}</div>
                  ))}
                </div>
              </div>

              <img className="image-shape shape-animaiton3" src={shape1} alt="" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="main-image">
              <img
                src="/assets/img/hero/hero4-img.png"
                alt=""
                style={{
                  maxHeight: '400px',
                  width: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner4;
