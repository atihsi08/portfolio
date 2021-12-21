import React from 'react';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Contact from './components/Contact/Contact.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Technology from './components/Technology/Technology.js';
import Projects from './components/Projects/Projects.js';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
    timeout: 3000,
    position: positions.BOTTOM_CENTER
};

function App() {
    return (
        <Provider template={AlertTemplate} {...options}>
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/technology" element={<Technology />} />
                    <Route exact path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
