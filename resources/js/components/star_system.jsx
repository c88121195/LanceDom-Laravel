import React from 'react';
import { createRoot } from 'react-dom/client';
// import Apple from './components/Test.jsx';
import Header from './all/header.jsx';
import Container from './all/Container.jsx';
import Footer from './all/footer.jsx';
import StarSystem from './star_systetm/StarSystem.jsx';
import '../../css/style.css'
import '../../css/star_system.css';

createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <Header />
        <Container>
            <StarSystem />
        </Container>
        <Footer />
    </React.Fragment>
);