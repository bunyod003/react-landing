import React from 'react';
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="home">
            {/* Баннер */}
            <div className="banner text-center p-5 mb-4 rounded-3" style={{
                backgroundImage: 'url("https://via.placeholder.com/1200x400")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff'
            }}>
                <div className="container">
                    <h1 className="display-4">Welcome to Our Amazing Blog</h1>
                    <p className="lead">Stay tuned for the latest news, insights, and stories from around the world.</p>
                    <a href="#" className="btn btn-primary btn-lg">Explore More</a>
                </div>
            </div>

            {/* Блоки блогов */}
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-4">
                        <img className="card-img-top" src="https://via.placeholder.com/300" alt="Blog 1" />
                        <div className="card-body">
                            <h5 className="card-title">Blog Title 1</h5>
                            <p className="card-text">A brief description of blog post 1.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4">
                        <img className="card-img-top" src="https://via.placeholder.com/300" alt="Blog 2" />
                        <div className="card-body">
                            <h5 className="card-title">Blog Title 2</h5>
                            <p className="card-text">A brief description of blog post 2.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4">
                        <img className="card-img-top" src="https://via.placeholder.com/300" alt="Blog 3" />
                        <div className="card-body">
                            <h5 className="card-title">Blog Title 3</h5>
                            <p className="card-text">A brief description of blog post 3.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4">
                        <img className="card-img-top" src="https://via.placeholder.com/300" alt="Blog 4" />
                        <div className="card-body">
                            <h5 className="card-title">Blog Title 4</h5>
                            <p className="card-text">A brief description of blog post 4.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <br/>
            <Service/>
            <br/>
            <Contact />
            <br/>
            <Footer />
        </div>
    );
};

export default Home;
