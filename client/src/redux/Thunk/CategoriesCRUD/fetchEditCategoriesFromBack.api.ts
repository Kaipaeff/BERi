import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneCategory from '../../../types/Category.types';
import { editOneCategoryFront } from '../../slices/CategoryCRUD/category.crud.slice';

// TODO: Функция для изменения адреса
export const fetchEditCategory=
  (
    EditCategory: IOneCategory
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/categories`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditCategory),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneCategoryFront(EditCategory));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
