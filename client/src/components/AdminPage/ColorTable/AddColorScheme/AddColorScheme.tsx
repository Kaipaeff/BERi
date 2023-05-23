import React, { useState } from 'react';
import styleAddColorScheme from './AddColorScheme.module.css';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';
import { INewColorElement } from '../../../../types/ColorTable.types';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchAddColorSchemeFromBack } from '../../../../redux/Thunk/ColorScheme/fetchAddColorSchemeFromBack.api';

export default function AddColorScheme({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const formAddSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewColor: INewColorElement = {
      color: colorName.toUpperCase(),
      colorCode: selectedColor.toUpperCase(),
    };
    dispatch(fetchAddColorSchemeFromBack(NewColor));
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <div className={styleAddColorScheme.conteiner}>
      <div className={styleAddColorScheme.innerArea}>
        <form onSubmit={formAddSubmitHandler}>
          <div className={styleAddColorScheme.inputElementBlock}>
            <label className={styleAddColorScheme.label} htmlFor="name">
              Наименование цвета
            </label>
            <input
              className={styleAddColorScheme.inputElementName}
              id="color"
              name="color"
              type="text"
              value={colorName}
              placeholder="Укажите название"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColorName(e.target.value)
              }
              required
            />
            <label className={styleAddColorScheme.label} htmlFor="name">
              Выберете цветовую гамму
            </label>
            <input
              className={styleAddColorScheme.inputElementCode}
              id="colorCode"
              name="colorCode"
              type="color"
              placeholder="#000000"
              value={selectedColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSelectedColor(e.target.value)
              }
              required
            />
            <button
              type="submit"
              className={styleAddColorScheme.submitFormBtn}
              title="Добавить"
              aria-label="add"
            >
              <img
                className={styleAddColorScheme.checkMarkRing}
                src={checkMarkRing}
                alt="checkMarkRing"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
