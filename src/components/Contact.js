// Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="contact container mt-5">
            <h2 className="text-center mb-4">Our Contacts</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Contact Us</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h4>Our Location</h4>
                    <p>1234 Main St,<br /> City, State, 12345</p>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099446!2d144.9537353153154!3d-37.8162799797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1d7f63%3A0xfbbf1c8c72c1454b!2s1234%20Main%20St%2C%20City%2C%20State%2C%2012345!5e0!3m2!1sen!2sau!4v1607415068395!5m2!1sen!2sau"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
