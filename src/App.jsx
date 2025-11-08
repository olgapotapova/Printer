import React from 'react';
import CookieModal from './components/CookieModal';
import i18n from 'i18next';

import {
  I18nReadyWrapper,
  Hero,
  Services,
  Advantages,
  Video,
  FAQ,
  // Contact,
  Footer
} from './components';
import './App.css';

console.log('Active language:', i18n.language);

function App() {
  return (
    <I18nReadyWrapper>
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
    </I18nReadyWrapper>
  );
}

export default App;
