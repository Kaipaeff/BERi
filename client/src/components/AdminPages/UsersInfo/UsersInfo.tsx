import React, { useEffect, useState } from 'react';
import OneUserCard from './OneUserCard/OneUserCard';
import styleUserInfo from './UserInfo.module.css';
import IOneUser from '../../../types/UserTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';
import { getAllUsersFromBack } from '../../../redux/Thunk/User/getAllUsersFromBack';

import search from '../../../img/icons/search.svg';
import filterIcon from '../../../img/icons/filterIcon.svg';

export default function UsersInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(
    (state: RootState) => state.UserReducer.allUsers
  );
  const [isAdninCheckbox, setIsAdninCheckbox] = useState(true);
  const [isUserCheckbox, setIsUserCheckbox] = useState(true);
  const [isActivatedCheckbox, setIsActivatedCheckbox] = useState(true);
  const [notActivatedCheckbox, setNotActivatedCheckbox] = useState(true);

  useEffect(() => {
    dispatch(getAllUsersFromBack());
  }, []);

  const filterHandler = (): void => {
    console.log(
      'SelectedFilter >>>>>',
      String(Number(isAdninCheckbox)) +
        String(Number(isUserCheckbox)) +
        String(Number(isActivatedCheckbox)) +
        String(Number(notActivatedCheckbox))
    );

    
  };

  return (
    <>
      <div className={styleUserInfo.searchRow}>
        <p>Всего пользователей: {allUsers.length}</p>
        <p>
          <input type="emai" />
          <img
            className={styleUserInfo.searcSimbol}
            src={search}
            alt="search"
          />
        </p>
        <p>
          <input
            onChange={() => setIsAdninCheckbox(!isAdninCheckbox)}
            checked={isAdninCheckbox}
            name="isAdninCheckbox"
            type="checkbox"
          />{' '}
          Админы
        </p>
        <p>
          <input
            onChange={() => setIsUserCheckbox(!isUserCheckbox)}
            checked={isUserCheckbox}
            name="isUserCheckbox"
            type="checkbox"
          />{' '}
          Пользователи
        </p>
        <p>
          <input
            onChange={() => setIsActivatedCheckbox(!isActivatedCheckbox)}
            checked={isActivatedCheckbox}
            name="isActivatedCheckbox"
            type="checkbox"
          />{' '}
          Почта подтверждена
        </p>
        <p>
          <input
            onChange={() => setNotActivatedCheckbox(!notActivatedCheckbox)}
            checked={notActivatedCheckbox}
            name="notActivatedCheckbox"
            type="checkbox"
          />{' '}
          Почта не подтверждена
        </p>
        <span
          title="Применить фильтр"
          aria-label="filter"
        >
          <img
            onClick={filterHandler}
            className={styleUserInfo.filterIconBtn}
            src={filterIcon}
            alt="filterIconBtn"
          />
        </span>
      </div>
      {allUsers.length ? (
        <div className={styleUserInfo.content}>
          {allUsers.map((user: IOneUser) => (
            <React.Fragment key={user.id}>
              <OneUserCard OneUser={user} />
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </>
  );
}
