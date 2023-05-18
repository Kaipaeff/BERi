import React from 'react';
import { El } from '../../types/types';
import style from '../Card/Card.module.css'
import Rating from '../Rating/Rating';

export default function Card({ el }: El): JSX.Element {
  return (
    <div className={style.card}>
      <img className={style.img} src={el.img} alt='cloth'/>
      <Rating el={el} />
      <p>{el.name}</p>
      <p>От {el.minPrice} ₽</p>
    </div>
  );
}
