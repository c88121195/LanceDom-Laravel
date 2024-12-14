import '../bootstrap.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import Apple from './components/Test.jsx';
import Header from './all/header.jsx';
import Banner from './home_page/Banner.jsx';
import Container from './all/Container.jsx';
import Footer from './all/footer.jsx';
import Home from './home_page/Home.jsx';
import '../../css/style.css';
import '../../css/home_page.css';

// createRoot(document.getElementById('app')).render(<Apple/>);
createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <Header />
        <Banner />
        <Container>
            <Home />
        </Container>
        <Footer />
    </React.Fragment>
);
