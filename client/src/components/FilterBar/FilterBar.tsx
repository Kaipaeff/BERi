import React from 'react';
import style from '../FilterBar/FilterBar.module.css';

export default function FilterBar() {
  return (
    <div className={style.filterBar}>
      <div className={style.filterHeader}>
        <h2>Фильтры</h2>
        <button className={style.closeBtn}></button>
      </div>
      <div className={style.categories}>
        <h3>Категории</h3>
        <p>Верхняя одежда</p>
        <p>Брюки</p>
        <p>Джинсы</p>
        <p>Футболки</p>
        <p>Рубашки</p>
      </div>
      <div className={style.colors}>
        <h3>Цвета</h3>
        <p>Белый</p>
        <p>Черный</p>
        <p>Синий</p>
        <p>Красный</p>
      </div>
      <div className={style.sizes}>
        <h3>Размеры</h3>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <div className={style.priceBar}>
        <div></div>
      </div>
    </div>
  );
}
