import React, { CSSProperties, useState } from 'react';
import { ColorResult } from 'react-color';
import IOneColorElement from '../../../../types/ColorTable.types';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchEditColorSchemeFromBack } from '../../../../redux/Thunk/ColorScheme/fetchEditColorSchemeFromBack.api';
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
    OneColorScheme.color
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
      color: colorSchemeName,
      colorCode: colorSchemeCode,
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
              <label className={styleColorSchemeCard.label} htmlFor="category">
                Наименование категории
              </label>
              <input
                className={styleColorSchemeCard.inputElement}
                id="category"
                name="category"
                type="text"
                value={colorSchemeName}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleColorSchemeCard.inputElementBlockDown}>
              <button
                type="submit"
                className={styleColorSchemeCard.submitFormBtn}
                title="Изменить данные"
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
            <div style={backgroundStyle} className={styleColorSchemeCard.showColorBlock}>{''}</div>
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
            // onClick={() => dispatch(fetchDeleteCategoryFromBack(OneCategory))}
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
