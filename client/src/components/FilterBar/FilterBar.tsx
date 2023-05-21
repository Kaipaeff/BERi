import React, { useEffect } from 'react';
import style from '../FilterBar/FilterBar.module.css';
import { RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getCategories } from '../../redux/Thunk/Categories/getCategories';
import { getAge } from '../../redux/Thunk/Age/getAge';
import { useLocation } from 'react-router-dom';
import {
  setAgeState,
  setCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';
import { getSexState } from '../../redux/selectors/sex.selector';
import { getAgeState } from '../../redux/selectors/age.selector';
import { getCategoryState } from '../../redux/selectors/category.selector';

export default function FilterBar(): JSX.Element {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const sexState = useAppSelector(getSexState);
  const ageState = useAppSelector(getAgeState);
  const catState = useAppSelector(getCategoryState);

  const categories = useAppSelector(
    (state: RootState) => state.CategoriesReducer.categories
  );

  const age = useAppSelector((state: RootState) => state.AgeReducer.age);

  function toggleActiveSexStyle(index: number) {
    if (index === sexState) {
      return style.sexActive;
    } else {
      return style.sexInActive;
    }
  }

  function toggleActiveAgeStyle(index: number) {
    if (index === ageState) {
      return style.ageActive;
    } else {
      return style.ageInActive;
    }
  }

  function toggleActiveCatStyle(index: number) {
    if (index === catState) {
      return style.catActive;
    } else {
      return style.catInActive;
    }
  }

  function handleReset() {
    dispatch(setSexState(0));
    dispatch(setAgeState(0));
    dispatch(setCategoryState(0));
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAge());
  }, []);

  return (
    <div className={style.filterBar}>
      <div className={style.filterHeader}>
        <h2>Фильтры</h2>
        <img onClick={handleReset} src="adjustments-off.svg" alt="close" />
      </div>
      <div className={style.sexSelector}>
        {location.pathname !== '/accessories' && (
          <>
            <h3>Пол</h3>
            <p
              className={toggleActiveSexStyle(1)}
              onClick={() => {
                dispatch(setSexState(1));
              }}
            >
              Для мальчиков
            </p>
            <p
              className={toggleActiveSexStyle(2)}
              onClick={() => {
                dispatch(setSexState(2));
              }}
            >
              Для девочек
            </p>
          </>
        )}
      </div>
      <div className={style.age}>
        <h3>Возраст</h3>
        {age.length && location.pathname === '/clothes' ? (
          age.map(
            (el) =>
              el.id < 4 && (
                <p
                  key={el.id}
                  className={toggleActiveAgeStyle(el.id)}
                  onClick={() => {
                    dispatch(setAgeState(el.id));
                  }}
                >
                  {el.age}
                </p>
              )
          )
        ) : age.length && location.pathname === '/shoes' ? (
          age.map(
            (el) =>
              el.id > 3 &&
              el.id < 16 && (
                <p
                  key={el.id}
                  className={toggleActiveAgeStyle(el.id)}
                  onClick={() => {
                    dispatch(setAgeState(el.id));
                  }}
                >
                  {el.age}
                </p>
              )
          )
        ) : age.length && location.pathname === '/accessories' ? (
          age.map(
            (el) =>
              el.id > 15 && (
                <p
                  key={el.id}
                  className={toggleActiveAgeStyle(el.id)}
                  onClick={() => {
                    dispatch(setAgeState(el.id));
                  }}
                >
                  {el.age}
                </p>
              )
          )
        ) : (
          <p>Age not found</p>
        )}
      </div>
      <div className={style.categories}>
        <span className={style.catSpan}>
          {categories.length &&
          sexState === 1 &&
          location.pathname === '/clothes' ? (
            <>
              <h3>Категории</h3>
              {categories.map(
                (el) =>
                  el.id < 14 && (
                    <p
                      key={el.id}
                      className={toggleActiveCatStyle(el.id)}
                      onClick={() => {
                        dispatch(setCategoryState(el.id));
                      }}
                    >
                      {el.productType}
                    </p>
                  )
              )}
            </>
          ) : categories.length &&
            sexState === 2 &&
            location.pathname === '/clothes' ? (
            <>
              <h3>Категории</h3>
              {categories.map(
                (el) =>
                  el.id < 17 && (
                    <p
                      key={el.id}
                      className={toggleActiveCatStyle(el.id)}
                      onClick={() => {
                        dispatch(setCategoryState(el.id));
                      }}
                    >
                      {el.productType}
                    </p>
                  )
              )}
            </>
          ) : categories.length && location.pathname === '/accessories' ? (
            <>
              <h3>Категории</h3>
              {categories.map(
                (el) =>
                  el.id > 16 && (
                    <p
                      key={el.id}
                      className={toggleActiveCatStyle(el.id)}
                      onClick={() => {
                        dispatch(setCategoryState(el.id));
                      }}
                    >
                      {el.productType}
                    </p>
                  )
              )}
            </>
          ) : categories.length ? (
            <></>
          ) : (
            <p>Categories not found</p>
          )}
        </span>
      </div>
      <div className={style.priceBar}>
        <div></div>
      </div>
    </div>
  );
}
