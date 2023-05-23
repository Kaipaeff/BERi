import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hooks';

import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleAddAge from './AddAge.module.css';

import { INewAge } from '../../../../types/Age.type';
import { getAge } from '../../../../redux/Thunk/Age/getAge';
import { fetchAddAgeFromBack } from '../../../../redux/Thunk/Age/fetchAddAgeFromBack.api';

export default function AddAge({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const [ageCategory, setAgeCategory] = useState<string>('');

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAgeCategory((pre: string) => e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewAge: INewAge = {
      age: ageCategory,
    };

    dispatch(fetchAddAgeFromBack(NewAge));
    dispatch(getAge());
    setAgeCategory('');
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <>
      <div className={styleAddAge.conteiner}>
        <div className={styleAddAge.innerArea}>
          <form
            className={styleAddAge.inputBlock}
            onSubmit={formSubmitHandler}
          >
            <div className={styleAddAge.inputElementBlock}>
              <label className={styleAddAge.label} htmlFor="age">
                Укажите возрастную категорию
              </label>
              <input
                className={styleAddAge.inputElement}
                id="age"
                name="age"
                type="text"
                value={ageCategory}
                onChange={formInputHandler}
                required
              />
              <button
                type="submit"
                className={styleAddAge.submitFormBtn}
                title="Добавить"
                aria-label="add"
              >
                <img
                  className={styleAddAge.checkMarkRing}
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