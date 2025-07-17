import { Link } from "react-router-dom";

const Cta3 = () => {
    return (
        <div className="cta4" style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="cta-bg-area">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading4-w">
                                <div className="cta-description" style={{ color: '#ffffff' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}>
                                        We are a <span style={{ color: '#ffffff' }}>new breed</span> of <br />
                                        <span style={{ color: '#ffffff', fontSize: '30px', }}>Data</span> and <span style={{ color: '#ffffff',  fontSize: '30px', }}>AI partner</span> bridging
                                    </p>
                                    <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
                                        <span style={{ color: '#00e6e6' }}>Consulting</span> | <span style={{ color: '#00e6e6' }}>Experience</span> | <span style={{ color: '#00e6e6' }}>Technology</span>
                                    </p>
                                    <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                                        From <span style={{ color: '#ffffff' }}>Insight</span> to <span style={{ color: '#ffffff' }}>Impact</span>: <span style={{ color: '#ffffff', fontWeight: 'bold' }}>AI that understands your business</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="shape1 shape-animaiton3" src="/assets/img/shapes/cta4-shape1.png" alt="" />
                    <img className="shape2 shape-animaiton3" src="/assets/img/shapes/cta4-shape2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cta3;
