import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './RegistrationModal.css';

const RegistrationModal = ({
  activeReg,
  setActiveReg,
  setActiveLog,
  setModalSuccessActive,
  modalMailErrorActive,
  setModalMailErrorActive,
}: {
  activeReg: boolean;
  setActiveReg: any;
  setActiveLog: any;
  setModalSuccessActive: any;
  modalMailErrorActive: boolean;
  setModalMailErrorActive: any;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const { storeContext } = useContext(Context);
  const func = () => {
    setActiveLog(true);
    setActiveReg(false);
  };
  const regFunc = async () => {
    await storeContext.registration(email, phone, password);
    if (!storeContext.isAuth) {
      setModalMailErrorActive(true);
      setActiveReg(false);
    } else {
        setModalSuccessActive(true);
      setActiveReg(false);
    }
  };
  return (
    <div
      className={activeReg ? 'regModal active' : 'regModal'}
      onClick={() => setActiveReg(false)}
    >
      <div className="regModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="regModalHeader">
          <div className="registration">Регистрация</div>
          <div className="isLog">
            <p>Уже зарегестрированы?</p>{' '}
            <p className="enter" onClick={func}>
              Войти
            </p>
          </div>
        </div>
        <div className="allInputsReg">
          <input
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
            pattern="[0-9]+"
          />
          <input
            className="inputs"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            placeholder="Phone"
            pattern="[0-9]+"
          />
          <input
            className="inputs"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
          <p className="isReg">
            Я согласен(-на) с политикой конфиденциальности и правилами
            использования
          </p>
          <button className="regButton" onClick={regFunc}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
export default observer(RegistrationModal);
