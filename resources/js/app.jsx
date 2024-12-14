import './bootstrap.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import Apple from './components/Test.jsx';
import Header from './components/all/header.jsx';
import Container from './components/all/Container.jsx';
import Footer from './components/all/footer.jsx';
import Home from './components/home_page/Home';
import '../css/style.css'
import '../css/home_page.css';

// createRoot(document.getElementById('app')).render(<Apple/>);
createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <Header />
        <Container>
            <Home />
        </Container>
        <Footer />
    </React.Fragment>
);
