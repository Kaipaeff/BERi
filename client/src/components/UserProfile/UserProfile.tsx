import React, { useContext } from 'react';
import { Context } from '../../index';

import phoneIcon from '../../img/icons/phone.svg';
import mailIcon from '../../img/icons/email.svg';
import arrowRight from '../../img/icons/arrowRight.svg';

import styleUserProfile from './UserProfile.module.css';

export default function UserProfile() {
  const { storeContext } = useContext(Context);
  const userProfile = storeContext.user;

  return (
    <div className={styleUserProfile.conteiner}>
      <span className={styleUserProfile.infoBlockMail}>
        <img src={mailIcon} alt="phone" className={styleUserProfile.mailIco} />{' '}
        {userProfile.email}
      </span>
      <span className={styleUserProfile.infoBlockPhone}>
        <img
          src={phoneIcon}
          alt="phone"
          className={styleUserProfile.phoneIco}
        />{' '}
        {userProfile.phone}
      </span>

      <button
        onClick={() =>
          console.log('Нажата кнопка изменить данные пользователя')
        }
        className={styleUserProfile.actionBtn}
        type="submit"
      >
        Изменить
        <img src={arrowRight} alt="arrowRight" />
      </button>
    </div>
  );
}
