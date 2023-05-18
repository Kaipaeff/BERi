import React, { useState } from 'react';
import styleOneAddressCard from './OneAddressCard.module.css';
import IDeliveryAddress from '../../../types/DeliveryAddress';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { fetchDeleteTodoTasks } from '../../../redux/Thunk/DeliveryAddress/deleteDeliveryAddres';
import editIconBtn from '../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../img/icons/deleteIconBtn.svg';
import checkMarkRing from '../../../img/icons/checkMarkRing.svg';

export default function OneAddressCard({
  address,
}: {
  address: IDeliveryAddress;
}) {
  const dispatch = useAppDispatch();
  const [editAddress, setEditAddress] = useState<number>(0);

  const [changeAdress, setChangeAdress] = useState(address.address);

  const inputChangeAddressHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setChangeAdress(e.target.value);
  };

  return (
    <div className={styleOneAddressCard.conteiner}>
      <div className={styleOneAddressCard.title}>
        <div className={styleOneAddressCard.titleText}>
          <h4>Адрес доставки:</h4>
        </div>
        <div className={styleOneAddressCard.btnblock}>
          <span
            onClick={() => setEditAddress(address.id)}
            title="Изменить адрес"
            aria-label="done"
          >
            <img
              className={styleOneAddressCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteTodoTasks(address))}
            title="Удалить адрес"
            aria-label="delete"
          >
            <img
              className={styleOneAddressCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
      {editAddress === address.id ? (
        <form className={styleOneAddressCard.editAddressForm}>
          <div className={styleOneAddressCard.labelAndTextarea}>
            <label
              className={styleOneAddressCard.labelTextarea}
              htmlFor={`edit-${address.id}`}
            >
              Измените адрес доставки
            </label>
            <textarea
              name="editAdress"
              id={`edit-${address.id}`}
              cols={37}
              rows={2}
              value={changeAdress}
              onChange={inputChangeAddressHandler}
              required
            />
          </div>
          <img
            className={styleOneAddressCard.checkMarkRing}
            src={checkMarkRing}
            alt="checkMarkRing"
          />
        </form>
      ) : (
        <p>{address.address}</p>
      )}
    </div>
  );
}
