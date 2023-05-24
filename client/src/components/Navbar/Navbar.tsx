import React, { useContext, useEffect, useState } from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

import search from '../../img/icons/search.svg';
import favorites from '../../img/icons/favorites.svg';
import account from '../../img/icons/account.svg';
import login from '../../img/icons/login.svg';
import logout from '../../img/icons/logout.svg';
import cart from '../../img/icons/cart.svg';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

import LogInModal from '../LogInModal/LogInModal';
import { Context } from '../../index';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getLocalGoods } from '../../redux/slices/shopCard/card.slice';
import RegSuccess from '../SuccessOrError/RegSuccess/RegSuccess';
import MailError from '../SuccessOrError/MailError/MailError';
import LoginError from '../SuccessOrError/LoginError/LoginError';
import LoginSuccess from '../SuccessOrError/LoginSuccess/LoginSuccess';
import {
  setAgeState,
  setCategoryState,
  setMainCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';

export function Navbar() {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const goodsFromStore = useAppSelector((state: any) => state.CartSlice);

  const [modalRegActive, setModalRegActive] = useState<boolean>(false);
  const [modalLoginActive, setModalLoginActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [modalMailErrorActive, setModalMailErrorActive] = useState(false);
  const [modalLoginErrorActive, setModalLoginErrorActive] = useState(false);
  const [modalLoginSuccessActive, setModalLoginSuccessActive] = useState(false);
  const [resultTotalProductCart, setResultTotalProductCart] =
    useState<number>();

  useEffect(() => {
    dispatch(getLocalGoods());
  }, []);

  useEffect(() => {
    if (goodsFromStore.goods) {
      const calculateActialQuantity = goodsFromStore.goods.reduce(
        (acc: number, el: any) => acc + el.quantity,
        0
      );
      setResultTotalProductCart(calculateActialQuantity);
    }
  }, [goodsFromStore, resultTotalProductCart, goodsFromStore.goods]);

  return (
    <div className={style.wrapper}>
      <div className={style.navbar}>
        <div className={style.container}>
          <Link to="/">
            <div
              onClick={() => {
                dispatch(setMainCategoryState(0));
                dispatch(setSexState(0));
                dispatch(setAgeState(0));
                dispatch(setCategoryState(0));
              }}
              className={style.navLogo}
            >
              <span>BERi</span>
            </div>
          </Link>

          <div className={style.navMenu}>
            <Link to="/clothes">
              <span
                onClick={() => {
                  dispatch(setMainCategoryState(1));
                  dispatch(setSexState(0));
                  dispatch(setAgeState(0));
                  dispatch(setCategoryState(0));
                }}
                className={style.clothesLink}
              >
                одежда
              </span>
            </Link>

            <Link to="/shoes">
              <span
                onClick={() => {
                  dispatch(setMainCategoryState(2));
                  dispatch(setSexState(0));
                  dispatch(setAgeState(0));
                  dispatch(setCategoryState(0));
                }}
                className={style.shoesLink}
              >
                обувь
              </span>
            </Link>

            <Link to="/accessories">
              <span
                onClick={() => {
                  dispatch(setMainCategoryState(3));
                  dispatch(setSexState(0));
                  dispatch(setAgeState(0));
                  dispatch(setCategoryState(0));
                }}
                className={style.accessoriesLink}
              >
                аксессуары
              </span>
            </Link>

            <Link to="/premiumbrands">
              <span
                onClick={() => {
                  dispatch(setMainCategoryState(0));
                  dispatch(setSexState(0));
                  dispatch(setAgeState(0));
                  dispatch(setCategoryState(0));
                }}
                className={style.PremiumBrandsLink}
              >
                премиум бренды
              </span>
            </Link>

            <Link to="/sale">
              <span
                onClick={() => {
                  dispatch(setMainCategoryState(0));
                  dispatch(setSexState(0));
                  dispatch(setAgeState(0));
                  dispatch(setCategoryState(0));
                }}
                className={style.saleLink}
              >
                sale %
              </span>
            </Link>
          </div>

          <div className={style.navIcons}>
            <div className={style.navIconsOther}>
              <Link to="/search">
                <img
                  className={style.searchIcon}
                  src={search}
                  alt="searchIcon"
                />
              </Link>

              <Link to="/favorites">
              {storeContext.isAuth && (
                <img
                  className={style.favoritesIcon}
                  src={favorites}
                  alt="favoritesIcon"
                />
              )}
              </Link>
            </div>

            <div className={style.navIconsUser}>
              <Link to="/account">
                {storeContext.isAuth && (
                  <img
                    className={style.accountIcon}
                    src={account}
                    alt="accountIcon"
                  />
                )}
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
                    onClick={() => setModalLoginActive(true)}
                    alt="loginIcon"
                  />
                )}
              </Link>

              <Link to="/cart">
                <div className={style.shopCart}>
                  <img className={style.cartIcon} src={cart} alt="cartIcon" />
                  <div className={style.shopCartCounter}>
                    <p>{resultTotalProductCart || 0}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
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
    </div>
  );
}
