import React, { useState } from 'react';
import { RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useLocation } from 'react-router-dom';
import { getCategoryState } from '../../redux/selectors/category.selector';
import { getAgeState } from '../../redux/selectors/age.selector';
import { getSexState } from '../../redux/selectors/sex.selector';
import { productType } from '../../types/product';
import { getMainCategoryState } from '../../redux/selectors/maincategory.selector';

export default function PaginationFunc() {
  const categoryState = useAppSelector(getCategoryState);
  const ageState = useAppSelector(getAgeState);
  const sexState = useAppSelector(getSexState);

  const location = useLocation();

  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );

  const mainCategoryState = useAppSelector(getMainCategoryState);

  function filterProducts(array: productType[]) {
    return array.filter((el) => {
      return (
        (mainCategoryState ? el.categoryId === mainCategoryState : true) &&
        (location.pathname === '/' ? el.rating > 4.5 : true) &&
        (location.pathname === '/premiumbrands' ? el.Vendor.premium : true) &&
        (location.pathname === '/sale' ? el.Vendor.premium : true) &&
        (categoryState ? el.productTypeId === categoryState : true) &&
        (sexState ? el.sexId === sexState : true) &&
        (ageState ? el.ageId === ageState : true)
      );
    });
  }

  // console.log('main>>>>>>', mainCategoryState);
  // console.log('sex>>>>>>', sexState);
  // console.log('age>>>>>>', ageState);
  // console.log('category>>>>>>', categoryState);

  const filteredProduct = filterProducts(products);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // console.log(currentProducts);

  return { currentProducts, handlePageChange };
}
