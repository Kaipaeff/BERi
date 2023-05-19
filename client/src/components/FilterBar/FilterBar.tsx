import React, { useEffect } from 'react';
import style from '../FilterBar/FilterBar.module.css';
import { BsCircleFill } from 'react-icons/bs';
import { OnClick, RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { activateButton } from '../../redux/slices/activebutton.slice';
import { getActiveBtnSelector } from '../../redux/selectors/active.selector';
import { getCategories } from '../../redux/Thunk/Categories/getCategories';

export default function FilterBar({ onClick }: OnClick): JSX.Element {
  const dispatch = useAppDispatch();

  const active = useAppSelector(getActiveBtnSelector);

  const categories = useAppSelector(
    (state: RootState) => state.CategoriesReducer.categories
  );

  function categoryHandleClick(data: number): void {
    onClick(data);
  }

  function toggleActiveStyle(index: number) {
    if (index === active) {
      return style.catActive;
    } else {
      return style.catInActive;
    }
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className={style.filterBar}>
      <div className={style.filterHeader}>
        <h2>Фильтры</h2>
        <button className={style.closeBtn}></button>
      </div>
      <div className={style.categories}>
        <h3>Категории</h3>
        <span className={style.catSpan}>
          {categories.length ? (
            categories.map((el) => (
              <p
                key={el.id}
                className={toggleActiveStyle(el.id)}
                onClick={() => {
                  categoryHandleClick(el.id);
                  dispatch(activateButton(el.id));
                }}
              >
                {el.category}
              </p>
            ))
          ) : (
            <p>Categories not found</p>
          )}
        </span>
      </div>
      <div className={style.colors}>
        <h3>Цвета</h3>
        <span className={style.iconSpan}>
          <BsCircleFill className={style.colorIcon} id={style.white} />
          <BsCircleFill className={style.colorIcon} id={style.black} />
          <BsCircleFill className={style.colorIcon} id={style.blue} />
          <BsCircleFill className={style.colorIcon} id={style.red} />
        </span>
      </div>
      <div className={style.sizes}>
        <h3>Размеры</h3>
        <div className={style.mainSizes}>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
        </div>
        <div className={style.addictSizes}>
          <button>One size</button>
          <button>Custom</button>
        </div>
      </div>
      <div className={style.priceBar}>
        <div></div>
      </div>
    </div>
  );
}
