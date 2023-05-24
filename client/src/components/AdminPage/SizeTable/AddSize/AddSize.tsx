import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { INewSize } from '../../../../types/Size.types';
import { fetchAddNewSizeFromBack } from '../../../../redux/Thunk/SizeTable/fetchAddNewSizeFromBack.api';
import { getAllSizesFromBack } from '../../../../redux/Thunk/SizeTable/getAllSiseFromBack';

import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';
import styleAddSize from './AddSize.module.css';

export default function AddSize({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const [sizeNumber, setSizeNumber] = useState<number>(0.0);

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSizeNumber((pre: number) => Number(e.target.value));
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewSize: INewSize = {
      size: sizeNumber,
    };

    dispatch(fetchAddNewSizeFromBack(NewSize));
    dispatch(getAllSizesFromBack());
    setSizeNumber(0.0);
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <>
      <div className={styleAddSize.conteiner}>
        <div className={styleAddSize.innerArea}>
          <form
            className={styleAddSize.inputBlock}
            onSubmit={formSubmitHandler}
          >
            <div className={styleAddSize.inputElementBlock}>
              <label className={styleAddSize.label} htmlFor="name">
                Укажите размер
              </label>
              <input
                className={styleAddSize.inputElement}
                id="size"
                name="size"
                type="number"
                step={0.1}
                min={0}
                max={160}
                value={sizeNumber}
                onChange={formInputHandler}
                required
              />
              <button
                type="submit"
                className={styleAddSize.submitFormBtn}
                title="Добавить размер"
                aria-label="add"
              >
                <img
                  className={styleAddSize.checkMarkRing}
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
