import React, { useState } from 'react';
import IOneTypeOfProduct from '../../../../types/TypeOfProducts.type';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchEditOneTypeOfProductFromBack } from '../../../../redux/Thunk/TypeOfProducts/fetchEditOneTypeOfProductFromBack.api';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleOneTypeOfProduct from './OneTypeOfProduct.module.css';
import { fetchDeleteOneTypeOfProductFromBack } from '../../../../redux/Thunk/TypeOfProducts/fetchDeleteOneTypeOfProductFromBack.api';

export default function OneTypeOfProductCard({
  OneTypeOfProduct,
}: {
  OneTypeOfProduct: IOneTypeOfProduct;
}) {
  const dispatch = useAppDispatch();
  const [editStatus, setEditStatus] = useState(false);

  const [typeOfProduct, setTypeOfProduct] = useState<string>(
    OneTypeOfProduct.productType
  );

  const formEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTypeOfProduct((pre: string) => e.target.value);
  };

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditTypeOfProduct: IOneTypeOfProduct = {
      id: OneTypeOfProduct.id,
      productType: typeOfProduct,
    };
    dispatch(fetchEditOneTypeOfProductFromBack(EditTypeOfProduct));
    setEditStatus(!editStatus);
  };

  return (
    <div className={styleOneTypeOfProduct.conteiner}>
      <div className={styleOneTypeOfProduct.title}>
        {editStatus ? (
          <form
            className={styleOneTypeOfProduct.inputBlock}
            onSubmit={formEditSubmitHandler}
          >
            <div className={styleOneTypeOfProduct.inputElementBlock}>
              <label className={styleOneTypeOfProduct.label} htmlFor="category">
                Наименование типа товара
              </label>
              <input
                className={styleOneTypeOfProduct.inputElement}
                id="category"
                name="category"
                type="text"
                value={typeOfProduct}
                onChange={formEditInputHandler}
                required
              />
            </div>
            <div className={styleOneTypeOfProduct.inputElementBlockDown}>
              <button
                type="submit"
                className={styleOneTypeOfProduct.submitFormBtn}
                title="Изменить данные"
                aria-label="add"
              >
                <img
                  className={styleOneTypeOfProduct.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className={styleOneTypeOfProduct.titleText}>
            <h3>{OneTypeOfProduct.productType}</h3>
          </div>
        )}

        <div className={styleOneTypeOfProduct.btnblock}>
          <span
            onClick={() => setEditStatus(!editStatus)}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleOneTypeOfProduct.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteOneTypeOfProductFromBack(OneTypeOfProduct))}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleOneTypeOfProduct.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
