import React from 'react';
import style from '../FilterBar/FilterBar.module.css';

export default function FilterBar() {
  return (
    <div className={style.filterBar}>
      <div className={style.filterHeader}>
        <h3>Фильтры</h3>
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
        <img></img>
        <img></img>
        <img></img>
        <img></img>
      </div>
      <div className={style.sizes}>
        <button>41</button>
        <button>42</button>
        <button>43</button>
        <button>44</button>
      </div>
      <div className={style.priceBar}>
        <div></div>
      </div>
    </div>
  );
}
