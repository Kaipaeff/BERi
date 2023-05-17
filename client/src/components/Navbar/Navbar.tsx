import React from 'react';
import style from './navbar.module.css'
import { Link } from 'react-router-dom';

import favorites from '../../img/icons/favorites.svg'
import cabinet from '../../img/icons/cabinet.svg'
import cart from '../../img/icons/cart.svg'
import login from '../../img/icons/login.svg'
import search from '../../img/icons/search.svg'



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
            <span className={style.clothesLink}>одежда</span>
          </Link>

          <Link to='/shoes'>
            <span className={style.shoesLink}>обувь</span>
          </Link>

          <Link to='/accessories'>
            <span className={style.accessoriesLink}>аксессуары</span>
          </Link>

          <Link to='/premiunbrands'>
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

        <Link to='/cabinet'>
          <img className={style.cabinetIcon} src={cabinet} alt="cabinetIcon" />
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
