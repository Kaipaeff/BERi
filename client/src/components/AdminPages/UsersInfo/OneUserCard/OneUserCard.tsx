import React, { useState } from 'react';
import styleOneUserCard from './OneUserCard.module.css';

import IOneUser from '../../../../types/UserTypes';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchDeleteUserFromBack } from '../../../../redux/Thunk/User/deleteUser.api';
import { fetchEditOneUser } from '../../../../redux/Thunk/User/editOneUser.api';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import isAdminIcon from '../../../../img/icons/isAdminIcon.svg';
import usersIcon from '../../../../img/icons/usersIcon.svg';
import phone from '../../../../img/icons/phone.svg';
import email from '../../../../img/icons/email.svg';
import isActivatedIcon from '../../../../img/icons/flagOn.svg';
import notActivatedIcon from '../../../../img/icons/flagOff.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

export default function OneUserCard({ OneUser }: { OneUser: IOneUser }) {

  const dispatch = useAppDispatch();

  const [editOneUserInfo, setEditOneUserInfo] = useState<number>(0);

  const [chekBoxIsAdmin, setChekBoxIsAdmin] = useState<boolean>(
    OneUser.isAdmin
  );
  const [chekBoxIsActivated, setchekBoxIsActivated] = useState<boolean>(
    OneUser.isActivated
  );

  const formImputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.name.includes('isAdmin')
      ? setChekBoxIsAdmin((pre: boolean) => e.target.checked)
      : setchekBoxIsActivated((pre: boolean) => e.target.checked);
  };

  const formSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const editOneUser: IOneUser = {
      id: OneUser.id,
      isAdmin: chekBoxIsAdmin,
      isActivated: chekBoxIsActivated,
      password: OneUser.password,
      email: OneUser.email,
      phone: OneUser.phone,
    };

    dispatch(fetchEditOneUser(editOneUser));
    setEditOneUserInfo(0);
  };

  return (
    <div className={styleOneUserCard.conteiner}>
      <div className={styleOneUserCard.title}>
        <div className={styleOneUserCard.titleText}>
          {editOneUserInfo === OneUser.id ? (
            <form onSubmit={formSubmitHandler} className={styleOneUserCard.editInputConteiner}>
              <span className={styleOneUserCard.isAdminInputArea}>
                <input
                  id={`isAdmin-${OneUser.id}`}
                  type="checkbox"
                  name={`isAdmin-${OneUser.id}`}
                  checked={chekBoxIsAdmin}
                  onChange={formImputHandler}
                />
                <label
                  className={styleOneUserCard.labelTextarea}
                  htmlFor={`isAdmin-${OneUser.id}`}
                >
                  Назначить админом
                </label>
              </span>
              <span className={styleOneUserCard.userIsActivatedArea}>
                <input
                  id={`isActivated-${OneUser.id}`}
                  type="checkbox"
                  name={`isActivated-${OneUser.id}`}
                  checked={chekBoxIsActivated}
                  onChange={formImputHandler}
                />
                <label
                  className={styleOneUserCard.labelTextarea}
                  htmlFor={`isActivated-${OneUser.id}`}
                >
                  Aктивировать
                </label>
              </span>
              <button
                className={styleOneUserCard.editBtn}
                title="Изменить маркеры"
                aria-label="edit"
              >
                <img
                  className={styleOneUserCard.checkMarkRing}
                  src={checkMarkRing}
                  alt="checkMarkRing"
                />
              </button>
            </form>
          ) : (
            <>
              {OneUser.isAdmin ? (
                <img
                  className={styleOneUserCard.isAdminIcon}
                  src={isAdminIcon}
                  alt="isAdmin"
                />
              ) : (
                <img
                  className={styleOneUserCard.usersIcon}
                  src={usersIcon}
                  alt="users"
                />
              )}
              {OneUser.isActivated ? (
                <img
                  className={styleOneUserCard.isActivatedIcon}
                  src={isActivatedIcon}
                  alt="isActivated"
                />
              ) : (
                <img
                  className={styleOneUserCard.notActivatedIcon}
                  src={notActivatedIcon}
                  alt="notActivated"
                />
              )}
            </>
          )}

          <span className={styleOneUserCard.emailAddress}>
            <img
              className={styleOneUserCard.emalIcon}
              src={email}
              alt="email"
            />
            {OneUser.email}
          </span>
          <span className={styleOneUserCard.phoneNumber}>
            <img
              className={styleOneUserCard.phoneIcon}
              src={phone}
              alt="phone"
            />
            {OneUser.phone}
          </span>
        </div>
        <div className={styleOneUserCard.btnblock}>
          <span
            onClick={() => setEditOneUserInfo(OneUser.id)}
            title="Изменить"
            aria-label="done"
          >
            <img
              className={styleOneUserCard.editIconBtn}
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
              className={styleOneUserCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
