import React from 'react';
import { El } from '../../types/types';
import style from '../Card/Card.module.css'

export default function Card({ el }: El): JSX.Element {
  return (
    <div className={style.card}>
      <img className={style.img} src={el.img} alt='cloth'/>
      <div className="rating"></div>
      <p>{el.name}</p>
      {/* <p>price</p> */}
    </div>
  );
}
