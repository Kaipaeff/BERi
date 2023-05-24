import React, { useState } from 'react';
import IOneVendor from '../../../../types/VendorTypes';

import styleOneVendorCard from './OneVendorCard.module.css';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import premimumIcon from '../../../../img/icons/premiumStar.png';
import premimumIcon1 from '../../../../img/icons/premiumQuality.png';
import { fetchEditVendor } from '../../../../redux/Thunk/Vendors/editVendor.api';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchDeleteVendorFromBack } from '../../../../redux/Thunk/Vendors/deleteVendor.api';

export default function OneVendorCard({
  OneVendor,
}: {
  OneVendor: IOneVendor;
}) {
  const dispatch = useAppDispatch();
  const [editStatus, setEditStatus] = useState(false);

  const [vendorName, setVendorName] = useState<string>(OneVendor.name);
  const [vendorCountry, setVendorCountry] = useState<string>(OneVendor.country);
  const [vendorPremiumStatus, setVendorPremiumStatus] = useState<boolean>(
    OneVendor.premium
  );

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.name === 'name')
      setVendorName((pre: string) => e.target.value);
    if (e.target.name === 'country')
      setVendorCountry((pre: string) => e.target.value);
    if (e.target.name === 'premium')
      setVendorPremiumStatus((pre: boolean) => e.target.checked);
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditVendor: IOneVendor = {
      id: OneVendor.id,
      name: vendorName,
      country: vendorCountry,
      premium: vendorPremiumStatus,
    };
    dispatch(fetchEditVendor(EditVendor));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleOneVendorCard.conteiner}>
      <div className={styleOneVendorCard.title}>
        {editStatus ? (
          <form
            className={styleOneVendorCard.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleOneVendorCard.inputElementBlock}>
              <label className={styleOneVendorCard.label} htmlFor="name">
                Поставщик
              </label>
              <input
                className={styleOneVendorCard.inputElement}
                id="name"
                name="name"
                type="text"
                value={vendorName}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleOneVendorCard.inputElementBlock}>
              <label className={styleOneVendorCard.label} htmlFor="country">
                Страна
              </label>
              <input
                className={styleOneVendorCard.inputElement}
                id="country"
                name="country"
                type="text"
                value={vendorCountry}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleOneVendorCard.inputElementBlockDown}>
              <input
                className={styleOneVendorCard.checkBoxElementBlockDown}
                title="Да/Нет"
                id="premium"
                type="checkbox"
                name="premium"
                checked={vendorPremiumStatus}
                onChange={formEditInputHandler}
              />
              <label className={styleOneVendorCard.label} htmlFor="premium">
                Премиум производитель
              </label>
              <button
                type="submit"
                className={styleOneVendorCard.submitFormBtn}
                title="Изменить данные"
                aria-label="add"
              >
                <img
                  className={styleOneVendorCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className={styleOneVendorCard.titleText}>
            <h3>{OneVendor.name}</h3>
            <p>Страна: {OneVendor.country}</p>
            {OneVendor.premium && (
                <img
                  className={styleOneVendorCard.premiumIcon1}
                  src={premimumIcon}
                  alt="premimum"
                />
              // <div className={styleOneVendorCard.premiumIconBlock}>
                /* <img
                  className={styleOneVendorCard.premiumIcon2}
                  src={premimumIcon1}
                  alt="premimum"
                /> */
              /* </div> */
            )}
          </div>
        )}

        <div className={styleOneVendorCard.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
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
            onClick={() => dispatch(fetchDeleteVendorFromBack(OneVendor))}
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
