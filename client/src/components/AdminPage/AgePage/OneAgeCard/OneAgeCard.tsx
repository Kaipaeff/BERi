import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hooks';

import IOneAge from '../../../../types/Age.type';
import { fetchEditAgeFromBack } from '../../../../redux/Thunk/Age/fetchEditAgeFromBack.api';
import { fetchDeleteAgeFromBack } from '../../../../redux/Thunk/Age/fetchDeleteAgeFromBack.api';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleAgeCard from './OneAgeCard.module.css';

export default function OneAgeCard({ OneAge }: { OneAge: IOneAge }) {
  const dispatch = useAppDispatch();
  const [editStatus, setEditStatus] = useState(false);

  const [categoryAge, setCategoryAge] = useState<string>(OneAge.age);

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCategoryAge((pre: string) => e.target.value);
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditOneAge: IOneAge = {
      id: OneAge.id,
      age: categoryAge,
    };
    dispatch(fetchEditAgeFromBack(EditOneAge));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleAgeCard.conteiner}>
      <div className={styleAgeCard.title}>
        {editStatus ? (
          <form
            className={styleAgeCard.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleAgeCard.inputElementBlock}>
              <label className={styleAgeCard.label} htmlFor="age">
                Наименование возрастной категории
              </label>
              <input
                className={styleAgeCard.inputElement}
                id="age"
                name="age"
                type="text"
                value={categoryAge}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleAgeCard.inputElementBlockDown}>
              <button
                type="submit"
                className={styleAgeCard.submitFormBtn}
                title="Изменить данные"
                aria-label="add"
              >
                <img
                  className={styleAgeCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className={styleAgeCard.titleText}>
            <h3>{OneAge.age}</h3>
          </div>
        )}

        <div className={styleAgeCard.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleAgeCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteAgeFromBack(OneAge))}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleAgeCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
