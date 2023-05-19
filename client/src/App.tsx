import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import style from './app.module.css';

import { Navbar } from './components/Navbar/Navbar';
import MainSlider  from './components/MainSlider/MainSlider';
import { Home } from './components/Home/Home';

import { Clothes } from './components/Clothes/Clothes';
import { Shoes } from './components/Shoes/Shoes';
import { Accessories } from './components/Accessories/Accessories';
import { PremiumBrands } from './components/PremiumBrands/PremiumBrands';
import { Sale } from './components/Sale/Sale';

import { Search } from './components/Search/Search';
import { Favorites } from './components/Favorites/Favorites';
import MyAccount from './components/MyAccount/MyAccount';
import LogIn from './components/LogIn/LogIn';
import ShopCart from './components/shopCart/ShopCart';

import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy';
import ReturnsPolicy from './components/ReturnsPolicy/ReturnsPolicy';
import Oferta from './components/Oferta/Oferta';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

import MyAccount from './components/MyAccount/MyAccount';
import MainSlider from './components/MainSlider/MainSlider';
import AdminMainPage from './components/AdminPages/AdminMainPage/AdminMainPage';
import { IUser } from './models/IUser';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import UserService from './services/UserService'
import Footer from './components/Footer/Footer';


function App() {
  const location = useLocation();

  const { storeContext } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      storeContext.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  if (storeContext.isLoading) {
    return <div>Загрузка...</div>;
  };

  return (
    <>
        <div className={style.wrapper}>
        <h6>
          {storeContext.isAuth
            ? `Пользователь авторизован ${storeContext.user.email}`
            : 'АВТОРИЗУЙТЕСЬ'}
        </h6>
        <h6>
          {storeContext.user.isActivated
            ? 'Аккаунт подтвержден по почте'
            : 'Аккаунт не подтвержден'}
        </h6>
        <div>
          <button onClick={getUsers}>Получить пользователей</button>
        </div>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))}
          <Navbar />

        {location.pathname !== '/login' &&
          location.pathname !== '/register' &&
          location.pathname !== '/account' &&
          location.pathname !== '/adminpages' && <MainSlider />}

        <div className={style.container}>

          {location.pathname !== '/login' &&
            location.pathname !== '/register' &&
            location.pathname !== '/account' && 
            location.pathname !== '/favorites' && 
            location.pathname !== '/shippingpolicy' && 
            location.pathname !== '/returnspolicy' && 
            location.pathname !== '/oferta' && 
            location.pathname !== '/privacypolicy' && 
            location.pathname !== '/search' && 
            location.pathname !== '/cart' && 
            
            <MainSlider />}

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/clothes" element={<Clothes />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/premiumbrands" element={<PremiumBrands />} />
            <Route path="/sale" element={<Sale />} />

            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/account" element={<MyAccount />} />
          
            <Route path="/cart" element={<ShopCart />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contacts" element={<ContactUs />} />
         
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/returnspolicy" element={<ReturnsPolicy />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/adminpages" element={<AdminMainPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default observer(App);
