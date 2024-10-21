// Service.js
import React from 'react';

const Service = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Creating responsive and high-quality websites.',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            title: 'Mobile App Development',
            description: 'Developing user-friendly mobile applications.',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            title: 'Digital Marketing',
            description: 'Providing effective digital marketing strategies.',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            title: 'SEO Optimization',
            description: 'Improving search engine ranking and visibility.',
            imageUrl: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div className="service container mt-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card mb-4">
                            <img
                                src={service.imageUrl}
                                className="card-img-top"
                                alt={service.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
