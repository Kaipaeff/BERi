import React, { FC, FormEvent, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './RegistrationModal.css';

const RegistrationModal = ({
  activeReg,
  setActiveReg,
  setActiveLog,
  setModalSuccessActive,
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
  const regFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <form className="allInputsReg" onSubmit={regFunc}>
          <input
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className="inputs"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            placeholder="+X (XXX) XXX-XX-XX"
            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            required
          />

          <input
            className="inputs"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            min='3'
            max='32'
            required
          />
          <p className="isReg">
            Я согласен(-на) с политикой конфиденциальности и правилами
            использования
          </p>
          <button type='submit' className="regButton">
            Регистрация
          </button>
        </form>
      </div>
    </div>
  );
};
export default observer(RegistrationModal);

// const React = require('react');
// const Layout = require('./Layout');

// function NewPhone(props) {
//   const { user } = props;
//   console.log('￼￼ ~ file: NewPhone.jsx:6 ~ NewPhone ~ user~', user.id);

//   return (
//     <Layout {...props}>
//       <script defer src="/js/newphone.js" />
//       <div className="container">
//         <form name="newPhone">
//           <h3>Страница добавления абонента</h3>
//           <div className="mb-3">
//             <label className="form-label" htmlFor="controlInput1">
//               Имя/наименование абонента:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="controlInput1"
//               placeholder="Абонент..."
//               aria-label="default input example"
//               name="subscriber"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label" htmlFor="controlInput2">
//               Номер телефона...
//             </label>
//             <input
//               type="tel"
//               className="form-control"
//               id="controlInput2"
//               aria-label="default input example"
//               name="phoneNumber"
//               placeholder="+X (XXX) XXX-XX-XX"
//               pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
//               required
//             />
//           </div>
//           <button id={user.id} type="submit" className="btn btn-primary">
//             Сохранить
//           </button>
//         </form>
//         <h5 className="msg" style={{ visibility: 'hidden', color: 'red' }} />
//       </div>
//     </Layout>
//   );
// }

// module.exports = NewPhone;