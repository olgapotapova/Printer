import React from 'react';
import CookieModal from './components/CookieModal';
import i18n from 'i18next';
console.log('Active language:', i18n.language);

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
