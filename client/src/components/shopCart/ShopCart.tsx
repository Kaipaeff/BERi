import React, { useEffect, useMemo, useState } from 'react';
import styles from './ShopCart.module.css';
import shoesImage from './img/shoesForTest.jpg';
import trashIcon from './img/trash.jpg';
import truckIcon from './img/truck.jpg';

export default function ShopCart() {
  interface ICounter {
    counter: number;
  }

  const initState: ICounter = {
    counter: 1,
  };

  const [counter, setCounter] = useState<any>(initState);

  interface IPrice {
    price: number;
  }

  const initStatePrice: IPrice = useMemo(
    () => ({
      //сюда прийдет цена из БД
      price: 80,
    }),
    []
  );

  const [price, setPrice] = useState<any>(initStatePrice);
  console.log(price, '<<<proceeee');
  function Increment() {
    setCounter((prev: any) => {
      return { counter: prev.counter + 1 };
    });
    setPrice((prev: any) => {
      return { price: prev.price + initStatePrice.price };
    });
  }

  function Dicrement() {
    setCounter((prev: any) => {
      if (prev.counter > 0) {
        return { counter: prev.counter - 1 };
      } else {
        return { counter: 0 };
      }
    });

    if (counter.counter !== 0) {
      setPrice((prev: any) => {
        if (prev.price >= initStatePrice.price) {
          return { price: prev.price - initStatePrice.price };
        }
      });
    }
  }
  const test = () => {
    console.log('test btn remove');
  };

  // бардер на радио кнопках
  const [radioClassName, setRadioClassName] = useState(false);
  const [radioClassName2, setRadioClassName2] = useState(false);

  const RadioBoolean = (checked: any) => {
    setRadioClassName(checked);
    setRadioClassName2(!checked);
  };

  const RadioBoolean2 = (checked: any) => {
    setRadioClassName(!checked);
    setRadioClassName2(checked);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.Head}>
        <h1>Cart</h1>
        <h4>
          Shop for $34 more to enjoy <b>FREE Shipping</b>
        </h4>
        <div className={styles.DileveryLine}>
          <div className={styles.DileveryLiner}></div>
          <img src={truckIcon} alt="truckIcon" />
        </div>
      </div>
      <div className={styles.Content}>
        {/* тут будет map */}
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>{' '}
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>{' '}
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>{' '}
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Quantity</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Price</h5>
            <div className={styles.PriceCounter}>
              <span>{price.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Subtotal</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>
        {/* тут map заканчивается */}
      </div>
      <div className={styles.InfoOrder}>
        <div className={styles.LeftSide_Promocod}>
          <h3>Have a coupon?</h3>
          <h6>Add your code for an instant cart discount</h6>
          <form>
            <input type="text" />
            <button>Apply</button>
          </form>
        </div>
        <div className={styles.RightSide_DeliveryChoice}>
          <h2>Cart summary</h2>
          <div>
            <form>
              <div>
                <div
                  className={
                    radioClassName
                      ? `${styles.DeliveryPrice} ${styles.Test1}`
                      : styles.DeliveryPrice
                  }
                >
                  <div className={styles.ShippingContainer}>
                    <input
                      className={styles.RadioPrice}
                      onChange={(e) => RadioBoolean(e.target)}
                      type="radio"
                      name="delivery"
                      value="free-shipping"
                    />
                    <span className={styles.SpanPrice}>Free shipping</span>
                  </div>
                  <span>100$</span>
                </div>
                <div
                  className={
                    radioClassName2
                      ? `${styles.DeliveryPrice} ${styles.Test1}`
                      : styles.DeliveryPrice
                  }
                >
                  <div className={styles.ShippingContainer}>
                    <input
                      className={styles.RadioPrice}
                      onChange={(e) => RadioBoolean2(e.target)}
                      type="radio"
                      name="delivery"
                      value="express-shipping"
                    />
                    <span className={styles.SpanPrice}>Express shipping</span>
                  </div>
                  <span>100$</span>
                </div>
                <div className={styles.DeliveryPrice}>
                  <h4>Total</h4>
                  <span>
                    <b>$160</b>
                  </span>
                </div>
                <div className={styles.DeliveryPrice}>
                  <h3>Subtotal</h3>
                  <span>
                    <b>$160</b>
                  </span>
                </div>
                <button type="submit" className={styles.Btn_Order}>
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
