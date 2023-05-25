import React from 'react';
import IOneOrderElement from '../../../../types/ListOfOrders.type';

import styleOrderDetail from './OrderDetail.module.css';

import arrawLeft from '../../../../img/icons/arrow-left.svg';

export default function OrderDetail({
  showOneOrder,
  setShowOneOrder,
  selectedOrder,
}: {
  showOneOrder: boolean;
  setShowOneOrder: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOrder: IOneOrderElement;
}) {
  console.log('selectedOrder>>>>>>>', selectedOrder);

  return (
    <div>
      <p
        className={styleOrderDetail.backArrow}
        onClick={() => setShowOneOrder(false)}
      >
        <img src={arrawLeft} alt="arrawLeft" />К списку ордеров
      </p>
    </div>
  );
}
