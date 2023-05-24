import style from '../Card/Card.module.css';
import { productType } from '../../types/product';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addGoodsReducer } from '../../redux/slices/shopCard/card.slice';

export default function Card({ oneProduct }: any): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: productType) => {

    const getItemLocalStorage = localStorage.getItem('GoodsForShopCart')
      ? JSON.parse(localStorage.getItem('GoodsForShopCart') as string)
      : [];

    const findItem = getItemLocalStorage.find(
      (el: productType) => el.id === product.id
    );

    if (findItem) {
      const quantityProductFilter = getItemLocalStorage.map((el: any) =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 || 1 } : el
      );

      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify(quantityProductFilter)
      );

      dispatch(addGoodsReducer(quantityProductFilter));
    } else {
      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify([
          ...getItemLocalStorage,
          { ...product, quantity: 1, price: oneProduct.minPrice },
        ])
      );
      const firtsAddProductInLocalStorage = JSON.parse(
        localStorage.getItem('GoodsForShopCart') as string
      );
      dispatch(addGoodsReducer(firtsAddProductInLocalStorage));
    }
  };

  return (
    <div className={style.card}>
      <img className={style.img} src={oneProduct.Images[0].src} alt="cloth" />
      <p className={style.name}>{oneProduct.name}</p>
      <p className={style.price}>от {oneProduct.minPrice} ₽</p>

      <button
        className={style.sliderDescriptionBtn}
        onClick={() => handleAddToCart(oneProduct)}
      >
        Добавить в корзину
        <img alt="arrowRight" />
      </button>
    </div>
  );
}
