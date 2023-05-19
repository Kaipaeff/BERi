import React, { useContext, useState } from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

import favorites from '../../img/icons/favorites.svg';
import cabinet from '../../img/icons/cabinet.svg';
import cart from '../../img/icons/cart.svg';
import login from '../../img/icons/login.svg';
import logout from '../../img/icons/logout.svg';
import search from '../../img/icons/search.svg';
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import LogInModal from '../LogInModal/LogInModal';
import { Context } from '../../index';

interface LogIn {
  modalLoginActive: boolean,
  setModalLoginActive: any,
}

export function Navbar() {
  const [modalRegActive, setModalRegActive] = useState<boolean>(false);
  const [modalLoginActive, setModalLoginActive] = useState(false);
  const { storeContext } = useContext(Context);
  return (
    <div className={style.wrapper}>

      <div className={style.navbar}>

        <div className={style.container}>

          <Link to='/'>
            <div className={style.navLogo}>
              <span>BERi</span>
            </div>
          </Link>

          <div className={style.navMenu}>

            <Link to='/clothes'>
              <span className={style.clothesLink}>одежда</span>
            </Link>

            <Link to='/shoes'>
              <span className={style.shoesLink}>обувь</span>
            </Link>

            <Link to='/accessories'>
              <span className={style.accessoriesLink}>аксессуары</span>
            </Link>

          <Link to="/premiumbrands">
            <span className={style.PremiumBrandsLink}>премиум бренды</span>
          </Link>

            <Link to='/sale'>
              <span className={style.saleLink}>sale %</span>
            </Link>

          </div>

          <div className={style.navIcons}>

            <Link to='/search'>
              <img className={style.searchIcon} src={search} alt="searchIcon" />
            </Link>

            <Link to='/favorites'>
              <img className={style.favoritesIcon} src={favorites} alt="favoritesIcon" />
            </Link>

            <Link to='/account'>
              <img className={style.cabinetIcon} src={cabinet} alt="cabinetIcon" />
            </Link>

              <Link to="/">
          {storeContext.isAuth ? (<img
              className={style.loginIcon}
              src={logout}
              onClick={() => storeContext.logout()}
                  alt="logoutIcon"
            />) : (<img
              className={style.loginIcon}
              src={login}
              onClick={() => setModalRegActive(true)}
              alt="loginIcon"
            />)}
              </Link>

            <Link to='/cart'>
              <img className={style.cartIcon} src={cart} alt="cartIcon" />
            </Link>

          </div>
          
        </div>
      </div>
      <div></div>
      {modalRegActive ? (<RegistrationModal
        activeReg={modalRegActive}
        setActiveReg={setModalRegActive}
        setActiveLog={setModalLoginActive}
      />) : null}
      {modalLoginActive ? (<LogInModal
        activeLog={modalLoginActive}
        setActiveLog={setModalLoginActive}
        setActiveReg={setModalRegActive}
      />) : null}
    </div>
  );
}
