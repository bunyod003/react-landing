import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

// const Home = () => <div><h2>Home Page</h2><p>Welcome to our homepage!</p></div>;
// const About = () => <div><h2>About Us</h2><p>Learn more about us here.</p></div>;
// const Services = () => <div><h2>Our Services</h2><p>Details about our services.</p></div>;
// const Contact = () => <div><h2>Contact Us</h2><p>Get in touch with us here.</p></div>;

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    // Применяем класс темы к <body> при изменении темы
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Router>
            <div className="App">
                <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
                <div className="container mt-4">
                    <Routes>
                        <Route basename="/react-landing" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Service />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
