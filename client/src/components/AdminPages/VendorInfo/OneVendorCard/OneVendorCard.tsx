import React, { useState } from 'react';
import IOneVendor from '../../../../types/VendorTypes';
import { useAppDispatch } from '../../../../redux/hooks/hooks';

import styleOneVendorCard from './OneVendorCard.module.css';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';

import premimumIcon from '../../../../img/icons/premiumStar.png';
import premimumIcon1 from '../../../../img/icons/premiumQuality.png';

export default function OneVendorCard({
  OneVendor,
}: {
  OneVendor: IOneVendor;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className={styleOneVendorCard.conteiner}>
      <div className={styleOneVendorCard.title}>
        <div className={styleOneVendorCard.titleText}>
          <h3>{OneVendor.name}</h3>
          <p>Страна: {OneVendor.country}</p>
          {OneVendor.premium && (
            <div className={styleOneVendorCard.premiumIconBlock}>
              <img
                className={styleOneVendorCard.premiumIcon1}
                src={premimumIcon}
                alt="premimum"
              />
              <img
                className={styleOneVendorCard.premiumIcon2}
                src={premimumIcon1}
                alt="premimum"
              />
            </div>
          )}
        </div>
        <div className={styleOneVendorCard.btnblock}>
          <span
            onClick={() => console.log('Нажата кнопка изменить')}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleOneVendorCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => console.log('Нажата кнопка удалить')}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleOneVendorCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
