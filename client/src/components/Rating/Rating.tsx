import React from 'react';
import { El } from '../../types/types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import style from './Rating.module.css'

export default function Rating({ el }: El): JSX.Element {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {el.rating >= index + 1 ? (
          <BsStarFill className={style.icon} />
        ) : el.rating >= number ? (
          <BsStarHalf className={style.icon} />
        ) : (
          <BsStar className={style.icon} />
        )}
      </span>
    );
  });

  return (
      <div className={style.iconDiv}>
        {ratingStar}
        <p>({el.reviews})</p>
      </div>
  );
}

