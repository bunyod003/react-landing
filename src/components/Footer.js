// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-dark mt-5 p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Company Info</a></li>
                            <li><a href="#" className="text-dark">Careers</a></li>
                            <li><a href="#" className="text-dark">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Web Development</a></li>
                            <li><a href="#" className="text-dark">Mobile App Development</a></li>
                            <li><a href="#" className="text-dark">Digital Marketing</a></li>
                            <li><a href="#" className="text-dark">SEO Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Support</a></li>
                            <li><a href="#" className="text-dark">Privacy Policy</a></li>
                            <li><a href="#" className="text-dark">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Facebook</a></li>
                            <li><a href="#" className="text-dark">Twitter</a></li>
                            <li><a href="#" className="text-dark">LinkedIn</a></li>
                            <li><a href="#" className="text-dark">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h5>Subscribe to our Newsletter</h5>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
