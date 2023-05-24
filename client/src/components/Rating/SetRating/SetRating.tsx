import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import style from './setrating.module.css';

export default function SetRating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  return (
    <div className={style.setRating}>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            {currentRating <= (hover || rating) ? (
              <BsStarFill
                className={style.starIcon}
                size={30}
                color={'#ff760d'}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            ) : (
              <BsStar
                className={style.starIcon}
                size={30}
                color={'#ff760d'}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            )}
          </label>
        );
      })}
      <p>Рейтинг {rating}</p>
    </div>
  );
}
