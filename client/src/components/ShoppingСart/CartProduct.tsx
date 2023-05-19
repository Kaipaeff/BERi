import React from 'react';
import styles from './ShopCart/ShopCart.module.css';
import trashIcon from './ShopCart/img/trash.jpg';

export default function CartProduct({
  product,
  Increment,
  Dicrement,
  handleTotalPrice,
  deleteHandle,
}: any): any {
  return (
    <>
      <div className={styles.InfoGoods} key={product.id}>
        <div className={styles.Product}>
          <h5>Товар</h5>
          <div className={styles.ProductChildElement}>
            <div>
              <img
                src={product.img}
                alt="product"
                className={styles.Img_Product}
              />
            </div>
            <div className={styles.ProductInfo}>
              <span>
                {product.name} &nbsp;&nbsp;
                {product.Vendor.name}
              </span>
              <span>{product.description}</span>
              <div className={styles.TrashContainer}>
                <img
                  src={trashIcon}
                  alt="trashImg"
                  className={styles.Icon_Trash}
                  onClick={() => deleteHandle(product.id)}
                />
                <button
                  onClick={() => deleteHandle(product.id)}
                  className={styles.Btn_Remove}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Quantity}>
          <h5>Количество</h5>
          <div className={styles.Counter}>
            <div className={styles.CounterBorder}>
              <button
                onClick={() => product.quantity > 1 && Dicrement(product.id)}
                className={styles.Dicrement}
              >
                -
              </button>
              <span className={styles.Count}>{product.quantity}</span>
              <button
                onClick={() => Increment(product.id)}
                className={styles.Increment}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.Price}>
          <h5>Стоимость</h5>
          <div className={styles.PriceCounter}>
            <span>{product.minPrice}р</span>
          </div>
        </div>
        <div className={styles.Subtotal}>
          <h5>Сумма</h5>
          <div className={styles.PriceCounter}>
            <b>{handleTotalPrice}р</b>
          </div>
        </div>
      </div>
    </>
  );
}
