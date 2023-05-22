import React, { useState } from 'react';
import styleAddVendorCard from './AddVehdorCard.module.css';

import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';
import { INewVendor } from '../../../../types/VendorTypes';
import { fetchAddNewVendor } from '../../../../redux/Thunk/Vendors/addNewVendor.api';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { getAllVendorFromBack } from '../../../../redux/Thunk/Vendors/getAllVendorsFromBack';

export default function AddVendorCard({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const [vendorName, setVendorName] = useState<string>('');
  const [vendorCountry, setVendorCountry] = useState<string>('');
  const [vendorPremiumStatus, setVendorPremiumStatus] =
    useState<boolean>(false);

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'name')
      setVendorName((pre: string) => e.target.value);
    if (e.target.name === 'country')
      setVendorCountry((pre: string) => e.target.value);
    if (e.target.name === 'premium')
      setVendorPremiumStatus((pre: boolean) => e.target.checked);
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewVendor: INewVendor = {
      name: vendorName,
      country: vendorCountry,
      premium: vendorPremiumStatus,
    };

    dispatch(fetchAddNewVendor(NewVendor));
    dispatch(getAllVendorFromBack());
    setVendorName('');
    setVendorCountry('');
    setVendorPremiumStatus(false);
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <>
      <div className={styleAddVendorCard.conteiner}>
        <div className={styleAddVendorCard.innerArea}>
          <form
            className={styleAddVendorCard.inputBlock}
            onSubmit={formSubmitHandler}
          >
            <div className={styleAddVendorCard.inputElementBlock}>
              <label className={styleAddVendorCard.label} htmlFor="name">
                Наименование поставщика
              </label>
              <input
                className={styleAddVendorCard.inputElement}
                id="name"
                name="name"
                type="text"
                value={vendorName}
                onChange={formInputHandler}
                required
              />
            </div>
            <div className={styleAddVendorCard.inputElementBlock}>
              <label className={styleAddVendorCard.label} htmlFor="country">
                Страна
              </label>
              <input
                className={styleAddVendorCard.inputElement}
                id="country"
                name="country"
                type="text"
                value={vendorCountry}
                onChange={formInputHandler}
                required
              />
            </div>
            <div className={styleAddVendorCard.inputElementBlockRight}>
              <input
                title="Да/Нет"
                id="premium"
                type="checkbox"
                name="premium"
                checked={vendorPremiumStatus}
                onChange={formInputHandler}
              />
              <label className={styleAddVendorCard.label} htmlFor="premium">
                Премиум производитель
              </label>
              <button
                type="submit"
                className={styleAddVendorCard.submitFormBtn}
                title="Добавить поставщика"
                aria-label="add"
              >
                <img
                  className={styleAddVendorCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
