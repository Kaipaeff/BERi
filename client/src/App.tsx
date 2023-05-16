import React from 'react';
import ShopCart from './components/shopCart/ShopCart';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <div className="App">
        <h1>HELLO</h1>
      </div>
      <ShopCart />
      <Footer />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
