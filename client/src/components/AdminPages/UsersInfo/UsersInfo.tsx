import React, { useEffect } from 'react';
import OneUserCard from './OneUserCard/OneUserCard';
import styleUserInfo from './UserInfo.module.css';
import search from '../../../img/icons/search.svg';
import IOneUser from '../../../types/UserTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';
import { getAllUsersFromBack } from '../../../redux/Thunk/User/getAllUsersFromBack';

export default function UsersInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(
    (state: RootState) => state.UserReducer.allUsers
  );

  useEffect(() => {
    dispatch(getAllUsersFromBack());
  }, []);
  
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
          <input type="checkbox" /> Показать администраторов
        </p>
        <button>Поиск</button>
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
