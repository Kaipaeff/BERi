import React, { Dispatch, SetStateAction, useState } from 'react';
import styleOneUserCard from './OneUserCard.module.css';

import IOneUser from '../../../../types/UserTypes';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchDeleteUserFromBack } from '../../../../redux/Thunk/User/deleteUser.api';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import isAdminIcon from '../../../../img/icons/isAdminIcon.svg';
import usersIcon from '../../../../img/icons/usersIcon.svg';
import phone from '../../../../img/icons/phone.svg';
import email from '../../../../img/icons/email.svg';
import isActivatedIcon from '../../../../img/icons/flagOn.svg';
import notActivatedIcon from '../../../../img/icons/flagOff.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

interface IInputCheckUser {
  isAdmin: boolean;
  isActivated: boolean;
}

export default function OneUserCard({ OneUser }: { OneUser: IOneUser }) {
  const dispatch = useAppDispatch();

  const [editOneUserInfo, setEditOneUserInfo] = useState<number>(0);

  const [inputsCheckBoxes, setInputsCheckBoxes] =
    useState<IInputCheckUser>() as [
      IInputCheckUser,
      Dispatch<SetStateAction<IInputCheckUser>>
    ];

  // const formHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setInputs((pre) => ({ ...pre, [e.target.name]: e.target.checked }));
  // };

  return (
    <div className={styleOneUserCard.conteiner}>
      <div className={styleOneUserCard.title}>
        <div className={styleOneUserCard.titleText}>
          {editOneUserInfo === OneUser.id ? (
            <form className={styleOneUserCard.editInputConteiner} action="">
              <span className={styleOneUserCard.isAdminInputArea}>
                <input
                  id={`isAdmin-${OneUser.id}`}
                  type="checkbox"
                  name="userIsAdmin"
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
                  id={`isAdmin-${OneUser.id}`}
                  type="checkbox"
                  name="userIsActivated"
                />
                <label
                  className={styleOneUserCard.labelTextarea}
                  htmlFor={`isAdmin-${OneUser.id}`}
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
