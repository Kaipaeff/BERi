import React, { useEffect } from 'react';
import { Catalog } from '../Catalog/Catalog';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setMainCategoryState } from '../../redux/slices/categories.slice';

export default function Clothes() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMainCategoryState(1));
  }, []);

  return <Catalog />;
}

