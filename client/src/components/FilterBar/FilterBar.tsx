import React, { useState } from 'react';
import style from '../FilterBar/FilterBar.module.css';
import { BsCircleFill } from 'react-icons/bs';
import { OnClick } from '../../types/types';

export default function FilterBar({ onClick }: OnClick): JSX.Element {
  const [activeBtn, setActiveBtn] = useState(0);

  function categoryHandleClick(data: number): void {
    onClick(data);
  }

  function activateHandleClick(num: number): void {
    setActiveBtn(num);
  }

  return (
    <div className={style.filterBar}>
      <div className={style.filterHeader}>
        <h2>Фильтры</h2>
        <button className={style.closeBtn}></button>
      </div>
      <div className={style.categories}>
        <h3>Категории</h3>
        <span className={style.catSpan}>
          <p
            onClick={() => {
              categoryHandleClick(1);
              activateHandleClick(1);
            }}
            style={{
              color: activeBtn === 1 ? 'black' : '#807e7e',
              textDecoration: activeBtn === 1 ? 'underline' : 'none',
            }}
          >
            Верхняя одежда
          </p>
          <p
            onClick={() => {
              categoryHandleClick(2);
              activateHandleClick(2);
            }}
            style={{
              color: activeBtn === 2 ? 'black' : '#807e7e',
              textDecoration: activeBtn === 2 ? 'underline' : 'none',
            }}
          >
            Брюки
          </p>
          <p
            onClick={() => {
              categoryHandleClick(3);
              activateHandleClick(3);
            }}
            style={{
              color: activeBtn === 3 ? 'black' : '#807e7e',
              textDecoration: activeBtn === 3 ? 'underline' : 'none',
            }}
          >
            Джинсы
          </p>
          <p
            onClick={() => {
              categoryHandleClick(4);
              activateHandleClick(4);
            }}
            style={{
              color: activeBtn === 4 ? 'black' : '#807e7e',
              textDecoration: activeBtn === 4 ? 'underline' : 'none',
            }}
          >
            Футболки
          </p>
          <p
            onClick={() => {
              categoryHandleClick(5);
              activateHandleClick(5);
            }}
            style={{
              color: activeBtn === 5 ? 'black' : '#807e7e',
              textDecoration: activeBtn === 5 ? 'underline' : 'none',
            }}
          >
            Рубашки
          </p>
        </span>
      </div>
      <div className={style.colors}>
        <h3>Цвета</h3>
        <span className={style.iconSpan}>
          <BsCircleFill className={style.colorIcon} id={style.white} />
          <BsCircleFill className={style.colorIcon} id={style.black} />
          <BsCircleFill className={style.colorIcon} id={style.blue} />
          <BsCircleFill className={style.colorIcon} id={style.red} />
        </span>
      </div>
      <div className={style.sizes}>
        <h3>Размеры</h3>
        <div className={style.mainSizes}>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
        </div>
        <div className={style.addictSizes}>
          <button>One size</button>
          <button>Custom</button>
        </div>
      </div>
      <div className={style.priceBar}>
        <div></div>
      </div>
    </div>
  );
}
