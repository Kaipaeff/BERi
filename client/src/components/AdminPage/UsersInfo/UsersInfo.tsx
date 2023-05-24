import React, { useEffect, useState } from 'react';
import OneUserCard from './OneUserCard/OneUserCard';
import styleUserInfo from './UserInfo.module.css';
import IOneUser from '../../../types/UserTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';
import { getAllUsersFromBack } from '../../../redux/Thunk/User/getAllUsersFromBack';
import { findUserByEmailFront } from '../../../redux/slices/User/user.slice';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';

export default function UsersInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(
    (state: RootState) => state.UserReducer.allUsers
  );
  const [isAdminCheckbox, setIsAdninCheckbox] = useState(false);
  const [isUserCheckbox, setUserCheckbox] = useState(false);
  const [isActivatedCheckbox, setIsActivatedCheckbox] = useState(false);
  const [nonActivatedCheckbox, setNonActivatedCheckbox] = useState(false);
  const [filterStatus, setFilterStatus] = useState(0);
  const [findInputActive, setFindInputActive] = useState(false);

  const [findEmail, setFindEmail] = useState('');

  useEffect(() => {
    dispatch(getAllUsersFromBack());
  }, [dispatch]);

  useEffect(() => {
    if (
      !isAdminCheckbox &&
      !isActivatedCheckbox &&
      !isUserCheckbox &&
      !nonActivatedCheckbox
    ) {
      setFilterStatus(0);
    } else if (
      isAdminCheckbox &&
      !isActivatedCheckbox &&
      !isUserCheckbox &&
      !nonActivatedCheckbox
    ) {
      setFilterStatus(1);
    } else if (
      !isAdminCheckbox &&
      isActivatedCheckbox &&
      !isUserCheckbox &&
      !nonActivatedCheckbox
    ) {
      setFilterStatus(2);
    } else if (isAdminCheckbox && isActivatedCheckbox) {
      setFilterStatus(3);
    } else if (
      !isAdminCheckbox &&
      !isActivatedCheckbox &&
      isUserCheckbox &&
      !nonActivatedCheckbox
    ) {
      setFilterStatus(4);
    } else if (isUserCheckbox && isActivatedCheckbox) {
      setFilterStatus(5);
    } else if (
      !isAdminCheckbox &&
      !isActivatedCheckbox &&
      !isUserCheckbox &&
      nonActivatedCheckbox
    ) {
      setFilterStatus(6);
    } else if (isAdminCheckbox && nonActivatedCheckbox) {
      setFilterStatus(7);
    } else if (isUserCheckbox && nonActivatedCheckbox) {
      setFilterStatus(8);
    }
  }, [
    isAdminCheckbox,
    isActivatedCheckbox,
    isUserCheckbox,
    nonActivatedCheckbox,
    filterStatus,
  ]);

  return (
    <>
      <h4 className={styleUserInfo.titlePage}>ПОЛЬЗОВАТЕЛИ</h4>
      <div className={styleUserInfo.searchRow}>
        <p>Всего пользователей: {allUsers.length}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (findEmail.length) {
              setFindInputActive(!findInputActive);
              dispatch(findUserByEmailFront(findEmail));
            }
          }}
        >
          <input
            className={styleUserInfo.inputTextElement}
            type="text"
            name="findEmail"
            value={findEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFindEmail(e.target.value)
            }
          />
          {findInputActive ? (
            <span title="Отменить поиск" aria-label="find">
              <button
                onClick={() => {
                  setFindInputActive(false);
                  setFindEmail('');
                  dispatch(getAllUsersFromBack());
                }}
                className={styleUserInfo.findBtn}
              >
                <img
                  className={styleUserInfo.searchOffSimbol}
                  src={searchOff}
                  alt="search"
                />
              </button>
            </span>
          ) : (
            <span title="Найти по email" aria-label="find">
              <button type="submit" className={styleUserInfo.findBtn}>
                <img
                  className={styleUserInfo.searchSimbol}
                  src={search}
                  alt="search"
                />
              </button>
            </span>
          )}
        </form>

        <p>
          <input
            className={styleUserInfo.inputElement}
            onChange={() => {
              if (isUserCheckbox) {
                setUserCheckbox(!isUserCheckbox);
              }
              setIsAdninCheckbox(!isAdminCheckbox);
            }}
            checked={isAdminCheckbox}
            name="isAdninCheckbox"
            type="checkbox"
          />{' '}
          Администраторы
        </p>
        <p>
          <input
            className={styleUserInfo.inputElement}
            onChange={() => {
              if (isAdminCheckbox) {
                setIsAdninCheckbox(!isAdminCheckbox);
              }
              setUserCheckbox(!isUserCheckbox);
            }}
            checked={isUserCheckbox}
            name="isUserCheckbox"
            type="checkbox"
          />{' '}
          Пользователи
        </p>
        <p>
          <input
            className={styleUserInfo.inputElement}
            onChange={() => {
              if (nonActivatedCheckbox) {
                setNonActivatedCheckbox(!nonActivatedCheckbox);
              }
              setIsActivatedCheckbox(!isActivatedCheckbox);
            }}
            checked={isActivatedCheckbox}
            name="isActivatedCheckbox"
            type="checkbox"
          />{' '}
          Активированы
        </p>
        <p>
          <input
            className={styleUserInfo.inputElement}
            onChange={() => {
              if (isActivatedCheckbox) {
                setIsActivatedCheckbox(!isActivatedCheckbox);
              }
              setNonActivatedCheckbox(!nonActivatedCheckbox);
            }}
            checked={nonActivatedCheckbox}
            name="nonActivatedCheckbox"
            type="checkbox"
          />{' '}
          Не активированы
        </p>
      </div>
      {allUsers.length ? (
        <div className={styleUserInfo.content}>
          {filterStatus === 0 &&
            allUsers.map((user: IOneUser) => (
              <React.Fragment key={user.id}>
                <OneUserCard OneUser={user} />
              </React.Fragment>
            ))}
          {filterStatus === 1 &&
            allUsers
              .filter((el) => el.isAdmin === isAdminCheckbox)
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 2 &&
            allUsers
              .filter((el) => el.isActivated === isActivatedCheckbox)
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 3 &&
            allUsers
              .filter(
                (el) =>
                  el.isAdmin === isAdminCheckbox &&
                  el.isActivated === isActivatedCheckbox
              )
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 4 &&
            allUsers
              .filter((el) => el.isAdmin !== isUserCheckbox)
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 5 &&
            allUsers
              .filter(
                (el) =>
                  el.isAdmin !== isUserCheckbox &&
                  el.isActivated === isActivatedCheckbox
              )
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 6 &&
            allUsers
              .filter((el) => el.isActivated !== nonActivatedCheckbox)
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 7 &&
            allUsers
              .filter(
                (el) =>
                  el.isAdmin === isAdminCheckbox &&
                  el.isActivated !== nonActivatedCheckbox
              )
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
          {filterStatus === 8 &&
            allUsers
              .filter(
                (el) =>
                  el.isAdmin !== isUserCheckbox &&
                  el.isActivated !== nonActivatedCheckbox
              )
              .map((user: IOneUser) => (
                <React.Fragment key={user.id}>
                  <OneUserCard OneUser={user} />
                </React.Fragment>
              ))}
        </div>
      ) : (
        <span className={styleUserInfo.message}>
          Информация о юзерах отсутствует! Попробуйте изменить условие
          поиска.
        </span>
      )}
    </>
  );
}
