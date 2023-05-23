import React, { useState } from 'react';
import IOneSize from '../../../../types/Size.types';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchEditSizeFromBack } from '../../../../redux/Thunk/SizeTable/fetchEditSizeFromBack.api';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';
import styleOneSizeCard from './OneSizeCard.module.css';
import { fetchDeleteSizeFromBack } from '../../../../redux/Thunk/SizeTable/fetchDeleteSizeFromBack.api';

export default function OneSizeCard({ OneSize }: { OneSize: IOneSize }) {
  const dispatch = useAppDispatch();

  const [editStatus, setEditStatus] = useState(false);

  const [sizeNumber, setSizeNumber] = useState<number>(OneSize.size);

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSizeNumber((pre: number) => Number(e.target.value));
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditCategory: IOneSize = {
      id: OneSize.id,
      size: Number(sizeNumber),
    };
    dispatch(fetchEditSizeFromBack(EditCategory));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleOneSizeCard.conteiner}>
      <div className={styleOneSizeCard.title}>
        {editStatus ? (
          <form
            className={styleOneSizeCard.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleOneSizeCard.inputElementBlock}>
              {/* <label className={styleOneSizeCard.label} htmlFor="category">
                Размер
              </label> */}
              <input
                className={styleOneSizeCard.inputElement}
                id="size"
                name="size"
                type="number"
                step={0.1}
                value={sizeNumber}
                onChange={formEditInputHandler}
                required
              />
              <div className={styleOneSizeCard.inputElementBlockDown}>
                <button
                  type="submit"
                  className={styleOneSizeCard.submitFormBtn}
                  title="Изменить данные"
                  aria-label="add"
                >
                  <img
                    className={styleOneSizeCard.checkMarkRing}
                    src={checkMarkRing}
                    alt="checkMarkRing"
                  />
                </button>
              </div>
            </div>
          </form>
          ) : (
            <div className={styleOneSizeCard.titleText}>
              <span>{OneSize.size}</span>
            </div>
        )}

        <div className={styleOneSizeCard.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleOneSizeCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteSizeFromBack(OneSize))}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleOneSizeCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
