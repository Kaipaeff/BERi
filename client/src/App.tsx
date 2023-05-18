import { Route, Routes, useLocation } from 'react-router-dom';

import style from './app.module.css';

import { Navbar } from './components/Navbar/Navbar';
import { Clothes } from './components/Clothes/Clothes';
import { Shoes } from './components/Shoes/Shoes';
import { Accessories } from './components/Accessories/Accessories';
import { PremiumBrands } from './components/PremiumBrands/PremiumBrands';
import { Sale } from './components/Sale/Sale';
import { Favorites } from './components/Favorites/Favorites';
import { Home } from './components/Home/Home';
import ShopCart from './components/shopCart/ShopCart';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';

import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy';
import ReturnsAndRefunds from './components/ReturnsAndRefunds/ReturnsAndRefunds';
import CookiesPolicy from './components/CookiesPolicy/CookiesPolicy';
import FrequentlyAsked from './components/Faq/Faq';
import LogIn from './components/LogIn/LogIn';

import MyAccount from './components/MyAccount/MyAccount';

import MainSlider  from './components/MainSlider/MainSlider';;

function App() {

  const location = useLocation()

  return (
    <>
    <div className={style.wrapper}>

      <Navbar />

      {(location.pathname !== '/login' 
        && location.pathname !== '/register' 
        && location.pathname !== '/myaccount' ) && <MainSlider />}

      <div className={style.container}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/clothes" element={<Clothes />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/premiumbrands" element={<PremiumBrands />} />
          <Route path="/sale" element={<Sale />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<ShopCart />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />
          <Route path="/returnsandrefunds" element={<ReturnsAndRefunds />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/frequentlyasked" element={<FrequentlyAsked />} />
          
        </Routes>
      </div>

    </div>
      <Footer />
      </>
  );
}

export default App;
