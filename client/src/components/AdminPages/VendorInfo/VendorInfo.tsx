import React, { useEffect, useState } from 'react';
import styleVendorInfo from './VendorInfo.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

import IOneVendor from '../../../types/VendorTypes';
import { RootState } from '../../../types/types';
import { getAllVendorFromBack } from '../../../redux/Thunk/Vendors/getAllVendorsFromBack';
import OneVendorCard from './OneVendorCard/OneVendorCard';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';

import { findVendorByNameOrCountryFront } from '../../../redux/slices/Vendor/vendor.slise';

export default function UsersInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const allVendors = useAppSelector(
    (state: RootState) => state.VendorReducer.allVendors
  );
  const [isPremiumCheckbox, setIsPremiumCheckbox] = useState(false);
  const [nonPremiumCheckbox, setNonPremiumCheckbox] = useState(false);
  const [filterStatus, setFilterStatus] = useState(0);
  const [findInputActive, setFindInputActive] = useState(false);

  const [findVendorName, setFindVendorName] = useState('');

  useEffect(() => {
    dispatch(getAllVendorFromBack());
  }, [dispatch]);

  useEffect(() => {
    if (!isPremiumCheckbox && !nonPremiumCheckbox) setFilterStatus(0);
    if (isPremiumCheckbox) setFilterStatus(1);
    if (nonPremiumCheckbox) setFilterStatus(2);
  }, [isPremiumCheckbox, nonPremiumCheckbox]);

  console.log(
    '🚀🚀 ~ file: VendorInfo.tsx:19 ~ UsersInfo ~ allVendors~',
    allVendors
  );

  return (
    <>
      <h4 className={styleVendorInfo.titlePage}>ПОСТАВЩИКИ</h4>
      <div className={styleVendorInfo.searchRow}>
        <button
          // onClick={() => dispatch(addNewAdressBtnToggle())}
          className={styleVendorInfo.actionBtn}
          type="submit"
        >
          Добавить поставщика
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <p>Всего поставщиков: {allVendors.length}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (findVendorName.length) {
              setFindInputActive(!findInputActive);
              dispatch(findVendorByNameOrCountryFront(findVendorName));
            }
          }}
        >
          <input
            className={styleVendorInfo.inputTextElement}
            type="text"
            name="findEmail"
            value={findVendorName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFindVendorName(e.target.value)
            }
          />

          {findInputActive ? (
            <span title="Отменить поиск" aria-label="find">
              <button
                onClick={() => {
                  setFindInputActive(false);
                  setFindVendorName('');
                  dispatch(getAllVendorFromBack());
                }}
                className={styleVendorInfo.findBtn}
              >
                <img
                  className={styleVendorInfo.searchOffSimbol}
                  src={searchOff}
                  alt="search"
                />
              </button>
            </span>
          ) : (
            <span title="Найти названию или стране" aria-label="find">
              <button type="submit" className={styleVendorInfo.findBtn}>
                <img
                  className={styleVendorInfo.searchSimbol}
                  src={search}
                  alt="search"
                />
              </button>
            </span>
          )}
        </form>
        <p>
          <input
            className={styleVendorInfo.inputElement}
            onChange={() => {
              if (nonPremiumCheckbox) {
                setNonPremiumCheckbox(!nonPremiumCheckbox);
              }
              setIsPremiumCheckbox(!isPremiumCheckbox);
            }}
            checked={isPremiumCheckbox}
            name="isPremiumCheckbox"
            type="checkbox"
          />{' '}
          Премиум бренды
        </p>
        <p>
          <input
            className={styleVendorInfo.inputElement}
            onChange={() => {
              if (isPremiumCheckbox) {
                setIsPremiumCheckbox(!isPremiumCheckbox);
              }
              setNonPremiumCheckbox(!nonPremiumCheckbox);
            }}
            checked={nonPremiumCheckbox}
            name="nonPremiumCheckbox"
            type="checkbox"
          />{' '}
          Обычные бренды
        </p>
      </div>
      {allVendors.length ? (
        <div className={styleVendorInfo.content}>
          {filterStatus === 0 &&
            allVendors.map((vendor: IOneVendor) => (
              <React.Fragment key={vendor.id}>
                <OneVendorCard OneVendor={vendor} />
              </React.Fragment>
            ))}
          {filterStatus === 1 &&
            allVendors
              .filter((el: IOneVendor) => el.premium === isPremiumCheckbox)
              .map((vendor: IOneVendor) => (
                <React.Fragment key={vendor.id}>
                  <OneVendorCard OneVendor={vendor} />
                </React.Fragment>
              ))}
          {filterStatus === 2 &&
            allVendors
              .filter((el: IOneVendor) => el.premium === !nonPremiumCheckbox)
              .map((vendor: IOneVendor) => (
                <React.Fragment key={vendor.id}>
                  <OneVendorCard OneVendor={vendor} />
                </React.Fragment>
              ))}
        </div>
      ) : (
        <span className={styleVendorInfo.message}>
          Информация о поставщиках отсутствует! Попробуйте изменить фильтр...
        </span>
      )}
    </>
  );
}
