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
import RegSuccess from '../SuccessOrError/RegSuccess/RegSuccess';
import MailError from '../SuccessOrError/MailError/MailError';
import LoginError from '../SuccessOrError/LoginError/LoginError';
import LoginSuccess from '../SuccessOrError/LoginSuccess/LoginSuccess';

export function Navbar() {
  const [modalRegActive, setModalRegActive] = useState<boolean>(false);
  const [modalLoginActive, setModalLoginActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [modalMailErrorActive, setModalMailErrorActive] = useState(false);
  const [modalLoginErrorActive, setModalLoginErrorActive] = useState(false);
  const [modalLoginSuccessActive, setModalLoginSuccessActive] = useState(false);
  const { storeContext } = useContext(Context);
  return (
    <div className={style.wrapper}>
      <div className={style.navbar}>
        <div className={style.container}>
          <Link to="/">
            <div className={style.navLogo}>
              <span>BERi</span>
            </div>
          </Link>

          <div className={style.navMenu}>
            <Link to="/clothes">
              <span className={style.clothesLink}>одежда</span>
            </Link>

            <Link to="/shoes">
              <span className={style.shoesLink}>обувь</span>
            </Link>

            <Link to="/accessories">
              <span className={style.accessoriesLink}>аксессуары</span>
            </Link>

          <Link to="/premiumbrands">
            <span className={style.PremiumBrandsLink}>премиум бренды</span>
          </Link>

            <Link to="/sale">
              <span className={style.saleLink}>sale %</span>
            </Link>
          </div>

          <div className={style.navIcons}>
            <Link to="/search">
              <img className={style.searchIcon} src={search} alt="searchIcon" />
            </Link>

            <Link to="/favorites">
              <img
                className={style.favoritesIcon}
                src={favorites}
                alt="favoritesIcon"
              />
            </Link>

            <Link to="/account">
              <img
                className={style.cabinetIcon}
                src={cabinet}
                alt="cabinetIcon"
              />
            </Link>

            <Link to="/">
              {storeContext.isAuth ? (
                <img
                  className={style.loginIcon}
                  src={logout}
                  onClick={() => storeContext.logout()}
                  alt="logoutIcon"
                />
              ) : (
                <img
                  className={style.loginIcon}
                  src={login}
                  onClick={() => setModalRegActive(true)}
                  alt="loginIcon"
                />
              )}
            </Link>

            <Link to="/cart">
              <img className={style.cartIcon} src={cart} alt="cartIcon" />
            </Link>
          </div>
        </div>
      </div>
      <div></div>
      {modalLoginSuccessActive ? (
        <LoginSuccess
          modalLoginSuccessActive={modalLoginSuccessActive}
          setModalLoginSuccessActive={setModalLoginSuccessActive}
        />
      ) : null}
      {modalLoginErrorActive ? (
        <LoginError
          modalLoginErrorActive={modalLoginErrorActive}
          setModalLoginErrorActive={setModalLoginErrorActive}
          setActiveLog={setModalLoginActive}
        />
      ) : null}
      {modalMailErrorActive ? (
        <MailError
          modalMailErrorActive={modalMailErrorActive}
          setModalMailErrorActive={setModalMailErrorActive}
          setActiveReg={setModalRegActive}
        />
      ) : null}
      {modalSuccessActive ? (
        <RegSuccess
          modalSuccessActive={modalSuccessActive}
          setModalSuccessActive={setModalSuccessActive}
        />
      ) : null}
      {modalRegActive ? (
        <RegistrationModal
          activeReg={modalRegActive}
          setActiveReg={setModalRegActive}
          setActiveLog={setModalLoginActive}
          setModalSuccessActive={setModalSuccessActive}
          modalMailErrorActive={modalMailErrorActive}
          setModalMailErrorActive={setModalMailErrorActive}
        />
      ) : null}
      {modalLoginActive ? (
        <LogInModal
          activeLog={modalLoginActive}
          setActiveLog={setModalLoginActive}
          setActiveReg={setModalRegActive}
          modalLoginErrorActive={modalLoginErrorActive}
          setModalLoginErrorActive={setModalLoginErrorActive}
          modalLoginSuccessActive={modalLoginSuccessActive}
          setModalLoginSuccessActive={setModalLoginSuccessActive}
        />
      ) : null}
    </div>
  );
}
