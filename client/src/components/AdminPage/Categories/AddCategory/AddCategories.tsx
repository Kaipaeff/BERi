import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { INewCategory } from '../../../../types/Category.types';
import { getAllCategoriesFromBack } from '../../../../redux/Thunk/CategoriesCRUD/getAllCategoriesFromBack';
import { fetchAddNewCategory } from '../../../../redux/Thunk/CategoriesCRUD/fetchAddNewCategory.api';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleAddCategory from './AddCategories.module.css';

export default function AddCategories({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const [categoryName, setCategoryName] = useState<string>('');

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCategoryName((pre: string) => e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewCategory: INewCategory = {
      category: categoryName,
    };

    dispatch(fetchAddNewCategory(NewCategory));
    dispatch(getAllCategoriesFromBack());
    setCategoryName('');
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <>
      <div className={styleAddCategory.conteiner}>
        <div className={styleAddCategory.innerArea}>
          <form
            className={styleAddCategory.inputBlock}
            onSubmit={formSubmitHandler}
          >
            <div className={styleAddCategory.inputElementBlock}>
              <label className={styleAddCategory.label} htmlFor="name">
                Наименование категории
              </label>
              <input
                className={styleAddCategory.inputElement}
                id="category"
                name="category"
                type="text"
                value={categoryName}
                onChange={formInputHandler}
                required
              />
              <button
                type="submit"
                className={styleAddCategory.submitFormBtn}
                title="Добавить поставщика"
                aria-label="add"
              >
                <img
                  className={styleAddCategory.checkMarkRing}
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
