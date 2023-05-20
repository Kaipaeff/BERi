import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './LogInModal.css';

const LogInModal = ({
  activeLog,
  setActiveLog,
  setActiveReg,
  modalLoginErrorActive,
  setModalLoginErrorActive,
  modalLoginSuccessActive,
  setModalLoginSuccessActive,
}: {
  activeLog: boolean;
  setActiveReg: any;
  setActiveLog: any;
  modalLoginErrorActive: boolean;
  setModalLoginErrorActive: any;
  modalLoginSuccessActive: boolean;
  setModalLoginSuccessActive: any;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { storeContext } = useContext(Context);
  const func = () => {
    setActiveLog(false);
    setActiveReg(true);
  };
  const logFunc = async () => {
    await storeContext.login(email, password);
    if (!storeContext.isAuth) {
      setModalLoginErrorActive(true);
      setActiveLog(false);
    } else {
      setModalLoginSuccessActive(true);
      setActiveLog(false);
    }
  };
  return (
    <div
      className={activeLog ? 'logInModal active' : 'logInModal'}
      onClick={() => setActiveLog(false)}
    >
      <div className="logInModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="logModalHeader">
          <div className="login">Вход</div>
          <div className="isReg">
            <p>У вас нет учетной записи?</p>{' '}
            <p className="reg" onClick={func}>
              Регистрация
            </p>
          </div>
        </div>

        <div className="allInputsLog">
          <input
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
          <input
            className="inputs"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
          <button className="logButton" onClick={logFunc}>
            Логин
          </button>
        </div>
      </div>
    </div>
  );
};
export default observer(LogInModal);
