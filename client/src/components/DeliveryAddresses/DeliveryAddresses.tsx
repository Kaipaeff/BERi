import React, { useEffect} from 'react';
import OneAddressCard from './OneAddressCard/OneAddressCard';
import styleDeliveryAddress from './DeliveryAddresses.module.css';
import { getDeliveryAddress } from '../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import arrowRight from '../../img/icons/arrowRight.svg';
import AddDeliveryAddress from './AddDeliveryAddress/AddDeliveryAddress';
import IDeliveryAddress from '../../types/DeliveryAddress';
import { addNewAdressBtnToggle } from '../../redux/slices/DeliveryAddress/addAddressButton.slice';

export default function DeliveryAddresses() {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );
  const addNewAdressBtn = useAppSelector(
    (state: RootState) => state.AddNewAddressBtn.addNewAdressBtn
  );
  console.log(
    '🚀🚀 ~ file: DeliveryAddresses.tsx:20 ~ DeliveryAddresses ~ addNewAdressBtn~',
    addNewAdressBtn
  );

  const userId = 1;

  useEffect(() => {
    dispatch(getDeliveryAddress(userId));
  }, [dispatch]);

  return (
    <>
      <div className={styleDeliveryAddress.conteiner}>
        {!addresses.length && (
          <div className={styleDeliveryAddress.addAddressConteiner}>
            <div>
              <h4>Информация о адресах доставки отсутствует!</h4>
              <p>Пожалуйста, заполните необходимую информацию...</p>
            </div>
            <div>
              <AddDeliveryAddress userId={userId} isCancel={false} />
            </div>
          </div>
        )}

        <div>
          <button
            onClick={() => dispatch(addNewAdressBtnToggle())}
            className={styleDeliveryAddress.actionBtn}
            type="submit"
          >
            Добавить адрес
            <img src={arrowRight} alt="arrowRight" />
          </button>
          <br />
          {addNewAdressBtn ? (
            <>
              <AddDeliveryAddress userId={userId} isCancel={true} />
              <br />
            </>
          ) : null}
        </div>
        <div className={styleDeliveryAddress.cardsConteiner}>
          {addresses.length
            ? addresses.map((address: IDeliveryAddress, ind: number) => (
                <React.Fragment key={address.id}>
                  <OneAddressCard address={address} />
                </React.Fragment>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
