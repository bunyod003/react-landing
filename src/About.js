import React from 'react';

const About = () => {
    return (
        <div className="about container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2>About Us</h2>
                    <p>
                        Our company has been a leader in the industry for over 20 years, providing high-quality products and exceptional customer service.
                    </p>
                    <p>
                        We value integrity, quality, and customer satisfaction above all else.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Company"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
