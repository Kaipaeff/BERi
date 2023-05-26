import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from '../ShopCart/ShopCart.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';

import { getDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { Context } from '../../../index';
import { ordering } from '../../../redux/Thunk/Ordering/ordering';
import { fetchAddDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/addDeliveryAddres.api';
import IDeliveryAddress, {
  INewDeliveryAddress,
} from '../../../types/DeliveryAddress';
import { fetchAddOrderFromBack } from '../../../redux/Thunk/ListOfOrders/fetchAddOrderFromBack.api';
import { productPropsType } from '../../../types/product';
import { fetchAddToCardFromFrontBulkCreate } from '../../../redux/Thunk/FullListOfUserOrderCartElements/fetchAddToCardFromFrontBulkCreate.api';
import { INewCartElement } from '../../../types/ListOfOrders.type';
import { setCurrentOrderId } from '../../../redux/slices/ListOfOrders/listOfOrders.slice';
import { useNavigate } from 'react-router-dom';
import { clearGoodsReducer } from '../../../redux/slices/shopCard/card.slice';

export default function DileveryPay({
  totalPriceCalculate,
  totalPrice,
  resultTotalProductCart,
  setResultTotalProductCart,
}: any) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [newAdress, setNewAdress] = useState<any>('');
  const [newOrderCreated, setNewOrderCreated] = useState<boolean>(false);
  const [pointAdress, setPointAdress] = useState<IDeliveryAddress>({
    id: 0,
    userId: 0,
    address: '',
  });
  const [clientNumber, setClientNumber] = useState<string>('');
  const [activeAddr, setActiveAddr] = useState<number>(0);

  const { storeContext } = useContext(Context);
  const userId = storeContext.user.id;

  const goodsForShopCart = JSON.parse(
    localStorage.getItem('GoodsForShopCart') as string
  );

  const orderId = useAppSelector(
    (state: RootState) => state.ListOfUserOrdersReduser.currentOrderData
  );

  const userOrderedCartElements: INewCartElement[] = [];

  //TODO СДЕЛАТЬ УДАЛЕНИЕ LOCAL STORAGE
  if (orderId) {
    for (let i = 0; i < goodsForShopCart?.length; i++) {
      userOrderedCartElements.push({
        userId: userId,
        productPropsId: goodsForShopCart[i].id,
        productName: goodsForShopCart[i].Product.name,
        quantity: goodsForShopCart[i].quantity,
        price: Number(goodsForShopCart[i].salePrice),
        totalPrice:
          goodsForShopCart[i].quantity * goodsForShopCart[i].salePrice,
        orderId: orderId,
      });
    }
    console.log('>>>>>>>>>>>>>>GOODS', userOrderedCartElements);
  }

  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );

  console.log('>>>>>>>>>> orderId', orderId);

  console.log('>>>>>>>>>>>>>>> GOODSCART', goodsForShopCart);

  useEffect(() => {
    const userId: number = storeContext.user.id;
    if (userId) {
      dispatch(getDeliveryAddress(userId));
    }
  }, [userId]);

  const addNewAdress = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAdress(event.target.value);
  };
  const addClientNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setClientNumber(event.target.value);
  };

  const handlePointAdress = (event: any) => {
    setPointAdress(event);
  };

  const handleOrdering = (event: any) => {
    event.preventDefault();
    const order = {
      phone: clientNumber,
      adress: newAdress,
      goods: goodsForShopCart,
    };
    const newTask: INewDeliveryAddress = {
      address: newAdress,
      userId,
    };

    // dispatch(fetchAddDeliveryAddress(newTask));
    ordering(order);
  };

  if (newOrderCreated && userOrderedCartElements.length) {
    dispatch(fetchAddToCardFromFrontBulkCreate(userOrderedCartElements));
    setNewOrderCreated(!newOrderCreated);
    dispatch(setCurrentOrderId(0));
    setResultTotalProductCart(0);
    localStorage.removeItem('GoodsForShopCart');
    dispatch(clearGoodsReducer([]));
    navigate('/');
  }

  function toggleActiveAddressStyle(index: number) {
    if (index === activeAddr) {
      return styles.addrActive;
    } else {
      return styles.addrInActive;
    }
  }

  function addOrderHandler() {
    const newOrder = {
      userId: userId,
      totalOrderPrice: totalPrice(),
      addressId: pointAdress.id,
      accepted: false,
      processed: false,
      completed: false,
      canceled: false,
    };

    dispatch(fetchAddOrderFromBack(newOrder));

    setNewOrderCreated(!newOrderCreated);

    // userOrderedCartElements.length &&
    //   dispatch(fetchAddToCardFromFrontBulkCreate(userOrderedCartElements));
  }

  console.log(activeAddr);

  return (
    <div className={styles.InfoOrder}>
      <div>
        <div className={styles.deliveryAdress}>
          <h3>Выберите адрес из списка:</h3>
          <div className={styles.adress}>
            {addresses.length ? (
              addresses.map((address: IDeliveryAddress, i: number) => (
                <p
                  className={toggleActiveAddressStyle(address.id)}
                  onClick={(event: any) => {
                    handlePointAdress(address);
                    setActiveAddr(address.id);
                  }}
                  key={address.id}
                >
                  {address.address}
                </p>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        {addresses.length === 0 && (
          <h1>Добавьте адрес доставки в личном кабинете</h1>
        )}
        {/* <span>Или введите новый</span>
        <input
          type="text"
          name="newAdress"
          value={newAdress || pointAdress.address}
          className={styles.inputDeliveryAdress}
          onChange={addNewAdress}
          placeholder="'Адрес доставки тянется из ЛК'"
        /> */}
        {/* надо поправить, не работает валидация номера */}
        {/* <input
          type="number"
          name="clientNumber"
          value={clientNumber}
          pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$"
          required
          className={styles.inputDeliveryAdress}
          onChange={addClientNumber}
          placeholder="Введите номер телефона в формате +7 (999) 999-99-99"
        /> */}
        {/* <button>Выбрать адрес доставки из личного кабинета</button> */}
        {/* или добавьте его в личном кабинете /account */}
        {/* </Link> */}
      </div>

      <div className={styles.RightSide_DeliveryChoice}>
        <div>
          <div className={styles.OrderContainer}>
            <div className={styles.DeliveryPrice}>
              <h3>Итого к оплате</h3>
              <span>
                {/* сумму доставки доставать из бека */}

                <b>{totalPrice()}р</b>
              </span>
            </div>
            <button
              onClick={(event) => {
                // handleOrdering(event);
                addOrderHandler();
                setResultTotalProductCart(0);
              }}
              className={styles.Btn_Order}
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
