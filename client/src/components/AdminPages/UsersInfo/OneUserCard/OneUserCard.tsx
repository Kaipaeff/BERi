import React, { useState } from 'react';
import stylyOneUserCard from './OneUserCard.module.css';

import IOneUser from '../../../../types/UserTypes';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import isAdminIcon from '../../../../img/icons/isAdminIcon.svg';
import usersIcon from '../../../../img/icons/usersIcon.svg';
import phone from '../../../../img/icons/phone.svg';
import email from '../../../../img/icons/email.svg';
import isActivatedIcon from '../../../../img/icons/flagOn.svg';
import notActivatedIcon from '../../../../img/icons/flagOff.svg';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchDeleteUserFromBack } from '../../../../redux/Thunk/User/deleteUser.api';

export default function OneUserCard({ OneUser }: { OneUser: IOneUser }) {
  const dispatch = useAppDispatch();

  const [editUserEmail, setEditUserEmail] = useState<string>(OneUser.email);
  const [editUserIsAdmin, setEditUserIsAdmin] = useState<boolean>(
    OneUser.isAdmin
  );
  const [editUserIsActivated, setEditUserIsActivated] = useState<boolean>(
    OneUser.isActivated
  );
  const [editUserPhone, setEditUserPhone] = useState<string>(OneUser.phone);

  return (
    <div className={stylyOneUserCard.conteiner}>
      <div className={stylyOneUserCard.title}>
        <div className={stylyOneUserCard.titleText}>
          {OneUser.isAdmin ? (
            <img
              className={stylyOneUserCard.isAdminIcon}
              src={isAdminIcon}
              alt="isAdmin"
            />
          ) : (
            <img
              className={stylyOneUserCard.usersIcon}
              src={usersIcon}
              alt="users"
            />
          )}
          {OneUser.isActivated ? (
            <img
              className={stylyOneUserCard.isActivatedIcon}
              src={isActivatedIcon}
              alt="isActivated"
            />
          ) : (
            <img
              className={stylyOneUserCard.notActivatedIcon}
              src={notActivatedIcon}
              alt="notActivated"
            />
          )}
          <span className={stylyOneUserCard.emailAddress}>
            <img
              className={stylyOneUserCard.emalIcon}
              src={email}
              alt="email"
            />
            {OneUser.email}
          </span>
          <span className={stylyOneUserCard.phoneNumber}>
            <img
              className={stylyOneUserCard.phoneIcon}
              src={phone}
              alt="phone"
            />
            {OneUser.phone}
          </span>
        </div>
        <div className={stylyOneUserCard.btnblock}>
          <span
            onClick={() => console.log('Edit')}
            title="Изменить"
            aria-label="done"
          >
            <img
              className={stylyOneUserCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => dispatch(fetchDeleteUserFromBack(OneUser))}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={stylyOneUserCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
