import React, { CSSProperties, useState } from 'react';
import { ColorResult } from 'react-color';
import IOneColorElement from '../../../../types/ColorTable.types';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchEditColorSchemeFromBack } from '../../../../redux/Thunk/ColorScheme/fetchEditColorSchemeFromBack.api';
import { fetchDeleteColorSchemeFromBack } from '../../../../redux/Thunk/ColorScheme/fetchDeleteColorSchemeFromBack.api';

import styleColorSchemeCard from './OneColorScheme.module.css';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

export default function OneColorSchemeCard({
  OneColorScheme,
}: {
  OneColorScheme: IOneColorElement;
}) {
  const [selectedColor, setSelectedColor] = useState<ColorResult>({
    hex: OneColorScheme.colorCode,
    hsl: { h: 0, s: 0, l: 0 },
    rgb: { r: 0, g: 0, b: 0 },
  });

  const backgroundStyle: CSSProperties = {
    background: selectedColor.hex,
  };
  const dispatch = useAppDispatch();

  const [editStatus, setEditStatus] = useState(false);
  const [colorSchemeName, setColorSchemeName] = useState<string>(
    OneColorScheme.color
  );
  const [colorSchemeCode, setColorSchemeCode] = useState<string>(
    OneColorScheme.colorCode
  );

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.name === 'color')
      setColorSchemeName((pre: string) => e.target.value);
    if (e.target.name === 'colorCode')
      setColorSchemeCode((pre: string) => e.target.value);
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditColorScheme: IOneColorElement = {
      id: OneColorScheme.id,
      color: colorSchemeName.toUpperCase(),
      colorCode: colorSchemeCode.toUpperCase(),
    };
    dispatch(fetchEditColorSchemeFromBack(EditColorScheme));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleColorSchemeCard.conteiner}>
      <div className={styleColorSchemeCard.title}>
        {editStatus ? (
          <form
            className={styleColorSchemeCard.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleColorSchemeCard.inputElementBlock}>

              <input
                className={styleColorSchemeCard.inputColorName}
                id="color"
                name="color"
                type="text"
                value={colorSchemeName}
                onChange={formEditInputHandler}
                required
              />
              <input
                className={styleColorSchemeCard.inputColorCode}
                id="colorCode"
                name="colorCode"
                type="color"
                value={colorSchemeCode}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleColorSchemeCard.inputElementBlockDown}>
              <button
                type="submit"
                className={styleColorSchemeCard.submitFormBtn}
                title="Сохранить изменения"
                aria-label="add"
              >
                <img
                  className={styleColorSchemeCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className={styleColorSchemeCard.colorInfo}>
            <div className={styleColorSchemeCard.titleText}>
              <h3>{OneColorScheme.color}</h3>
            </div>
            <div className={styleColorSchemeCard.titleText}>
              <h3>{OneColorScheme.colorCode}</h3>
            </div>
            <div
              style={backgroundStyle}
              className={styleColorSchemeCard.showColorBlock}
            >
              {''}
            </div>
          </div>
        )}

        <div className={styleColorSchemeCard.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleColorSchemeCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() =>
              dispatch(fetchDeleteColorSchemeFromBack(OneColorScheme))
            }
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleColorSchemeCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
