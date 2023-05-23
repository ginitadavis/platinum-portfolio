import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import '../styles/Content.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content() {

    return (
        <>
            <div style={{ backgroundColor: '#F6FAFF' }}>
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
            </div>
        </>
    );
}

export default Content;