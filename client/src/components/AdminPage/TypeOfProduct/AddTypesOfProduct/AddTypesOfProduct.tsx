import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hooks';

import { INewTypeOfProduct } from '../../../../types/TypeOfProducts.type';
import { fetchAddTypeOfProductFromBack } from '../../../../redux/Thunk/TypeOfProducts/fetchAddTypeOfProductFromBack.api';
import { getAllTypesOfProductsFromBack } from '../../../../redux/Thunk/TypeOfProducts/getAllTypesOfProductsFromBack';

import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleAddTypeOfProduct from './AddTypeOfProduct.module.css'


export default function AddTypesOfProduct({
  addCardIsActive,
  setAddCardIsActive,
}: {
  addCardIsActive: boolean;
  setAddCardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const [typeOfProduct, setTypeOfProduct] = useState<string>('');

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTypeOfProduct((pre: string) => e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const NewTypeOfProduct: INewTypeOfProduct = {
      productType: typeOfProduct,
    };

    dispatch(fetchAddTypeOfProductFromBack(NewTypeOfProduct));
    dispatch(getAllTypesOfProductsFromBack());
    setTypeOfProduct('');
    setAddCardIsActive(!addCardIsActive);
  };

  return (
    <>
      <div className={styleAddTypeOfProduct.conteiner}>
        <div className={styleAddTypeOfProduct.innerArea}>
          <form
            className={styleAddTypeOfProduct.inputBlock}
            onSubmit={formSubmitHandler}
          >
            <div className={styleAddTypeOfProduct.inputElementBlock}>
              <label className={styleAddTypeOfProduct.label} htmlFor="name">
                Наименование типа товара
              </label>
              <input
                className={styleAddTypeOfProduct.inputElement}
                id="category"
                name="category"
                type="text"
                value={typeOfProduct}
                onChange={formInputHandler}
                required
              />
              <button
                type="submit"
                className={styleAddTypeOfProduct.submitFormBtn}
                title="Добавить поставщика"
                aria-label="add"
              >
                <img
                  className={styleAddTypeOfProduct.checkMarkRing}
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