import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './LogInModal.css';

const LogInModal = ({ activeLog, setActiveLog, setActiveReg }: {
  activeLog: boolean;
  setActiveReg: any;
  setActiveLog: any;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { storeContext } = useContext(Context);
  const func = () => {
    setActiveLog(false)
    setActiveReg(true)
  }

  //авторизуем юзера и скрываем модалку, только если заполнены поля
  const authClick = () => {
      if(email && password) {
        storeContext.login(email, password)
        setActiveLog(false)
      }
  }

  useEffect(() => {
    inputRef.current?.focus();
  })

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className={activeLog ? 'logInModal active' : 'logInModal'}
      onClick={() => setActiveLog(false)}
    >
      <div className="logInModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="logModalHeader">
          <div className="login">Вход</div>
          <div className='isReg'>
            <p>У вас нет учетной записи?</p>{' '}
            <p className='reg' onClick={func}>Регистрация</p>
          </div>
        </div>

        <div className='allInputsLog'>
          <input
          className='emailInput'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Адрес электронной почты"
            ref={inputRef}
          />
          <input
          className='passwordInput'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <button className='loginButton' onClick={authClick}>
          Авторизоваться
        </button>
      </div>
    </div>
  );
};
export default observer(LogInModal);
