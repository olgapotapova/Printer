import React from 'react';
import CookieModal from './components/CookieModal';

import {
  Hero,
  Services,
  Advantages,
  Video,
  FAQ,
  // Contact,
  Footer
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <CookieModal />
      <Hero />
      <Services/>
      <div className='container'>
        <Advantages />
        <Video />
      </div>
      <FAQ />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
