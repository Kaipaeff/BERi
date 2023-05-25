import React, { useEffect, useState } from 'react';
// import { El } from '../../types/types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './ProductPage.module.css';
import { productPropsType, productType } from '../../types/product';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { addGoodsReducer } from '../../redux/slices/shopCard/card.slice';
import arrowRight from '../../img/icons/arrowRight.svg';
// import arrawLeft from '../../img/icons/arrow-left.svg';
import Rating from '../Rating/Rating/Rating';
import SetRating from '../Rating/SetRating/SetRating';
import { getProductPropsFromBack } from '../../redux/Thunk/ProductProps/getProductPropsFromBack';
import { getLoading } from '../../redux/slices/ProductProps/loading.selector';
import { getProductProps } from '../../redux/slices/ProductProps/productprops.selector';
import { BsCircleFill } from 'react-icons/bs';
import favorites from '../../img/icons/favorites.svg';
import favorite from '../../img/icons/favorite.svg';

export default function ProductPage(): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [activeRating, setActiveRating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSize, setActiveSize] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');

  const location = useLocation();
  const el = location.state.el;
  console.log("el:======================", el)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loading = useAppSelector(getLoading);

  const productProps = useAppSelector(getProductProps);

  useEffect(() => {
    dispatch(getProductPropsFromBack(el.id));
  }, []);

  const handleAddToCart = (product: productPropsType) => {
    //позже кнопку "в корзину" изменить на "перейти в корзину"?

    console.log(product);

    const getItemLocalStorage = localStorage.getItem('GoodsForShopCart')
      ? JSON.parse(localStorage.getItem('GoodsForShopCart') as string)
      : [];

    const findItem = getItemLocalStorage.find(
      (el: productPropsType) => el?.id === product?.id
    );

    if (findItem) {
      const quantityProductFilter = getItemLocalStorage.map((el: any) =>
        el.id === product?.id ? { ...el, quantity: el.quantity + 1 || 1 } : el
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
          { ...product, quantity: 1, price: el.minPrice },
        ])
      );
      const firtsAddProductInLocalStorage = JSON.parse(
        localStorage.getItem('GoodsForShopCart') as string
      );
      dispatch(addGoodsReducer(firtsAddProductInLocalStorage));
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleActiveRating() {
    setActiveRating(true);
  }

  function handleInactiveRating() {
    setActiveRating(false);
  }

  function handleSetColor(color: string) {
    setColor(color);
  }

  function handleSetSize(size: number) {
    setSize(size);
  }

  function handleSetAddToCart(addToCart: boolean) {
    setAddToCart(addToCart);
  }

  function toggleActiveSizeStyle(index: number) {
    if (index === activeSize) {
      return style.sizeActive;
    } else {
      return style.sizeInActive;
    }
  }

  const filteredColorProductProp = productProps.filter(
    (el) => el.Color?.color === color
  )[0];

  const filteredProductProp = productProps.filter(
    (el) => el.Color?.color === color && el.Size?.size === size
  );

  console.log('----');
  console.log('color>>>>>', color);
  console.log('----');

  return (
    <div className={style.wrapper}>
      {/* <p className={style.backArrow} onClick={() => navigate(-1)}>
        <img src={arrawLeft} alt="arrawLeft" />
        назад
      </p> */}

      <div className={style.cardContainer}>
        <img
          className={style.productImg}
          src={
            color
              ? filteredColorProductProp.Images[0]?.src
              : productProps[0]?.Images[0]?.src
          }
          alt="cloth"
        />

        {isFavorite ? (
          <img
            onClick={() => setIsFavorite(!isFavorite)}
            className={style.favoriteTrue}
            src={favorite}
            alt="favorite"
          />
        ) : (
          <img
            onClick={() => setIsFavorite(!isFavorite)}
            className={style.favoriteFalse}
            src={favorites}
            alt="favorite"
          />
        )}

        <div className={style.descriptionContainer}>
          <div className={style.description}>
            <p className={style.name}>
              <b>Название: </b> {el.name}
            </p>

            <p>
              <b>Описание:</b> <br />
              {el.description}
            </p>

            <p>
              <b>Цвет:</b> <br />
              {color
                ? filteredColorProductProp?.Color?.color
                : productProps[0]?.Color?.color}
            </p>

            <p className={style.brand}>
              <b>Бренд: </b> {el.Vendor.name}
            </p>

            <p className={style.country}>
              <b>Страна: </b> {el.Vendor.country}
            </p>

            {activeRating ? (
              <div
                className={style.setRatingDiv}
                onMouseLeave={handleInactiveRating}
              >
                <SetRating />
              </div>
            ) : (
              <div
                className={style.ratingDiv}
                onMouseEnter={handleActiveRating}
              >
                <Rating el={el} />
              </div>
            )}

            <div className={style.sizeBar}>
              {productProps
                .filter((product, index) =>
                  color
                    ? product?.Color?.color === color
                    : product?.Color?.color === productProps[0]?.Color?.color
                )
                .map((product) => (
                  <p
                    className={toggleActiveSizeStyle(product?.id)}
                    onClick={() => {
                      !color && handleSetColor(productProps[0]?.Color?.color);
                      size === product.Size?.size
                        ? handleSetSize(0)
                        : handleSetSize(product.Size?.size);
                      activeSize === product?.id
                        ? setActiveSize(0)
                        : setActiveSize(product?.id);
                    }}
                    key={product?.id}
                  >
                    {product.Size?.size}
                  </p>
                ))}
            </div>

            <div className={style.colorBar}>
              <div className={style.colorDD}>
                <button className={style.ddToggle} onClick={toggleMenu}>
                  Выбрать цвет
                  <img src="Vector.svg" alt="vector" />
                </button>
                {productProps.length && isOpen && (
                  <ul className={style.ddMenu}>
                    {productProps
                      .filter(
                        (product, index, self) =>
                          index ===
                          self.findIndex((el) => el.colorId === product.colorId)
                      )
                      .map((product) => (
                        <li
                          key={product?.id}
                          onClick={() => {
                            handleSetColor(product?.Color?.color);
                            handleSetSize(0);
                            setActiveSize(0);
                            handleSetAddToCart(false);
                            toggleMenu();
                          }}
                        >
                          {product.Color.color}{' '}
                          <BsCircleFill
                            style={{ color: `${product.Color.colorCode}` }}
                            className={style.colorIcon}
                          />
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className={style.btnContainer}>
            <p className={style.price}>
              <b>
                {filteredProductProp.length
                  ? filteredProductProp[0]?.salePrice
                  : el.minPrice}{' '}
                ₽
              </b>
            </p>
            {addToCart ? (
              <Link to="/cart">
                <button
                  className={style.addToCardBtn}
                  onClick={() => handleSetAddToCart(!addToCart)}
                >
                  Перейти в корзину
                  <img src={arrowRight} alt="arrowRight" />
                </button>
              </Link>
            ) : (
              <button
                className={style.addToCardBtn}
                onClick={() => {
                  filteredProductProp[0] &&
                    handleAddToCart(filteredProductProp[0]);
                  activeSize && handleSetAddToCart(!addToCart);
                }}
              >
                Добавить в корзину
                <img src={arrowRight} alt="arrowRight" />
              </button>
            )}
            {!activeSize && (
              <p className={style.alertSize}>Пожалуйста, выберите размер</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

