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
          <div className={styles.ProductChildElement}>
            <div>
              <img
                src={product?.Images[0]?.src}
                alt="product"
                className={styles.Img_Product}
              />
            </div>
            <div className={styles.ProductInfo}>
              <span>
                {product?.Product?.name} &nbsp;&nbsp;
                {product?.Product?.Vendor?.name}
              </span>

              <div>
                <span>Размер: {product?.Size?.size}</span>
              </div>

              
            </div>
          </div>
        </div>
        <div className={styles.Quantity}>
          <div className={styles.Counter}>
            <div className={styles.CounterBorder}>
              <button
                onClick={() => product?.quantity > 1 && Dicrement(product.id)}
                className={styles.Dicrement}
              >
                -
              </button>
              <span className={styles.Count}>{product?.quantity}</span>
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
          <div className={styles.PriceCounter}>
            <span>{product?.salePrice}р</span>
          </div>
        </div>
        <div className={styles.Subtotal}>
          <div className={styles.PriceCounter}>
            <b>{handleTotalPrice}р</b>
          </div>
        </div>
        <div className={styles.TrashContainer}>
                <img
                  src={trashIcon}
                  alt="trashImg"
                  className={styles.Icon_Trash}
                  onClick={() => deleteHandle(product.id)}
                />
                {/* <button
                  onClick={() => deleteHandle(product.id)}
                  className={styles.Btn_Remove}
                >
                  Удалить
                </button> */}
              </div>
        
      </div>
    </>
  );
}
