import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './RegistrationModal.css';

const RegistrationModal = ({
  activeReg,
  setActiveReg,
  setActiveLog,
}: {
  activeReg: boolean;
  setActiveReg: any;
  setActiveLog: any;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const { storeContext } = useContext(Context);
  const func = () => {
    setActiveLog(true);
    setActiveReg(false);
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

  return (
    <div
      className={activeReg ? 'regModal active' : 'regModal'}
      onClick={() => setActiveReg(false)}
    >
      <div className="regModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="regModalHeader">
          <div className="registration">Регистрация</div>
          <div className="isLog">
            <p>Уже зарегистрированы?</p>{' '}
            <p className="enter" onClick={func}>
              Войти
            </p>
          </div>
        </div>
        <div className="allInputsReg">
          <input
            className="emailInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            ref={inputRef}
            placeholder="Адрес электронной почты"
          />
          <input
            className="phoneInputs"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            placeholder="Телефон"
          />
          <input
            className="passwordInputs"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
          <p className="isReg">
            Согласен(-на) с политикой конфиденциальности
          </p>
        </div>
          <button
            className="regButton"
            onClick={() => storeContext.registration(email, phone, password)}
          >
            Регистрация
          </button>
      </div>
    </div>
  );
};
export default observer(RegistrationModal);
