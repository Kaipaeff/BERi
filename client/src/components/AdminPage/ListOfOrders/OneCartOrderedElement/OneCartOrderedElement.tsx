import React from 'react';
import IOneOrderedCartElement from '../../../../types/Cart.type';

import styleOneCardOrderedElement from './OneCartOrderedElement.module.css';

export default function OneCartOrderedElement({
  CartElement,
}: {
  CartElement: IOneOrderedCartElement;
}) {
  return (
    <React.Fragment>
      <div className={styleOneCardOrderedElement.tableTitle}>
        <div className={styleOneCardOrderedElement.columnArticle}>
          {CartElement.productPropsId}
        </div>
        <div className={styleOneCardOrderedElement.columnName}>
          {CartElement.productName}
        </div>
        <div className={styleOneCardOrderedElement.columnQuantity}>
          {CartElement.quantity}
        </div>
        <div className={styleOneCardOrderedElement.columnPrice}>
          {CartElement.price}
        </div>
        <div className={styleOneCardOrderedElement.columnTotalAmount}>
          {CartElement.totalPrice}
        </div>
      </div>
    </React.Fragment>
  );
}
