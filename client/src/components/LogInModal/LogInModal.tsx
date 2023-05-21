import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import close from '../../img/icons/close.svg';
import './LogInModal.css';

const LogInModal = ({
  activeLog,
  setActiveLog,
  setActiveReg,
  setModalLoginErrorActive,
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
  const logFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    >
      <div className="logInModalContent">
        <div className="logModalHeader">
<<<<<<< HEAD
          {/* <div className='logModalHeaderPlus'> */}
          <div className="login">Вход</div>
            <img
              className="closeIcon"
=======
          <div className='logModalHeaderPlus'>
            <div className="login">Вход</div>
            <img
              className="img"
>>>>>>> dev
              src={close}
              alt="close"
              onClick={() => setActiveLog(false)}
            />
<<<<<<< HEAD
          {/* </div> */}

            <div className='isReg'>
              <p>У вас нет учетной записи?</p>
              <p className='reg' onClick={func}>
                Регистрация
              </p>
            </div>
        </div>

        <form className='allInputsLog' onSubmit={logFunc}>
          <input
            className='emailInput'
=======
          </div>

          <div className="isReg">
            <p>У вас нет учетной записи?</p>
            <p className="reg" onClick={func}>
              Регистрация
            </p>
          </div>
        </div>

        <form className="allInputsLog" onSubmit={logFunc}>
          <input
            className="inputs"
>>>>>>> dev
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            autoFocus
            placeholder="Адрес электронной почты"
          />
          <input
<<<<<<< HEAD
            className='passwordInput'
=======
            className="inputs"
>>>>>>> dev
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
<<<<<<< HEAD
        </form>
        <button type="submit" className="loginButton">
          Авторизоваться
        </button>
=======
          <button type="submit" className="logButton">
            Логин
          </button>
        </form>
>>>>>>> dev
      </div>
    </div>
  );
};
export default observer(LogInModal);
