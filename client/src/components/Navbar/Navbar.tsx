import React from 'react';
import style from './navbar.module.css'
import { Link } from 'react-router-dom';
import login from '../../img/icons/login.svg'
import favorites from '../../img/icons/favorites.svg'
import cart from '../../img/icons/cart.svg'

export function Navbar() {

  return (
    <div className={style.navbar}>
      <div className={style.container}>
        
        <Link to='/'>
          <div className={style.navLogo}>
            <span>BERi</span>
          </div>
        </Link>

        <div className={style.navMenu}>

          <Link to='/clothes'>
            <span>одежда</span>
          </Link>

          <Link to='/shoes'>
            <span>обувь</span>
          </Link>

          <Link to='/accessories'>
            <span>аксессуары</span>
          </Link>

          <Link to='/brands'>
            <span>премиум бренды</span>
          </Link>

          <Link to='/sale'>
            <span>sale %</span>
          </Link>

        </div>

      <div className={style.navIcons}>

        <Link to='/favorites'>
          <img className={style.favoritesIcon} src={favorites} alt="favoritesIcon" />
        </Link>

        <Link to='/login'>
          <img className={style.loginIcon} src={login} alt="loginIcon" />
        </Link>

        <Link to='/cart'>
          <img className={style.cartIcon} src={cart} alt="cartIcon" />
        </Link>

      </div>
      </div>
    </div>
  )
}
