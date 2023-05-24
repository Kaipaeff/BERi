import { El } from '../../types/types';
import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ el }: El): JSX.Element {
  return (     
    <Link to="/product-page" state={{ el }}>
      <div className={style.card}>
        <img className={style.img} src={el.Images[0].src} alt="cloth" />
        <p className={style.name}>{el.name}</p>
        <p className={style.price}>от {el.minPrice} ₽</p>
      </div>
    </Link>
  );
}
