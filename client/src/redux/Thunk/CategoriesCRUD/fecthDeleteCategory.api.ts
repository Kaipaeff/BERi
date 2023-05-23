import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { deleteOneCategoryFront } from '../../slices/CategoryCRUD/category.crud.slice';
import IOneCategory from '../../../types/Category.types';

// TODO: Функция для удаления категории
export const fetchDeleteCategoryFromBack =
  (
    OneCategory: IOneCategory
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/categories/${OneCategory.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneCategoryFront(OneCategory));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };
