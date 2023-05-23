import React, { useState } from 'react';
import IOneCategory from '../../../../types/Category.types';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchEditCategory } from '../../../../redux/Thunk/CategoriesCRUD/fetchEditCategoriesFromBack.api';
import styleOneCategoryCard from './OneCategoryCard.module.css'

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';
import { fetchDeleteCategoryFromBack } from '../../../../redux/Thunk/CategoriesCRUD/fecthDeleteCategory.api';

export default function OneCategoryCard({
  OneCategory,
}: {
  OneCategory: IOneCategory;
}) {
  const dispatch = useAppDispatch();
  const [editStatus, setEditStatus] = useState(false);

  const [categoryName, setCategoryName] = useState<string>(
    OneCategory.category
  );

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCategoryName((pre: string) => e.target.value);
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditCategory: IOneCategory = {
      id: OneCategory.id,
      category: categoryName,

    };
    dispatch(fetchEditCategory(EditCategory));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleOneCategoryCard.conteiner}>
      <div className={styleOneCategoryCard.title}>
        {editStatus ? (
          <form
            className={styleOneCategoryCard.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleOneCategoryCard.inputElementBlock}>
              <label className={styleOneCategoryCard.label} htmlFor="category">
                Наименование категории
              </label>
              <input
                className={styleOneCategoryCard.inputElement}
                id="category"
                name="category"
                type="text"
                value={categoryName}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleOneCategoryCard.inputElementBlockDown}>
              <button
                type="submit"
                className={styleOneCategoryCard.submitFormBtn}
                title="Изменить данные"
                aria-label="add"
              >
                <img
                  className={styleOneCategoryCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className={styleOneCategoryCard.titleText}>
            <h3>{OneCategory.category}</h3>
          </div>
        )}

        <div className={styleOneCategoryCard.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleOneCategoryCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteCategoryFromBack(OneCategory))}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleOneCategoryCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
