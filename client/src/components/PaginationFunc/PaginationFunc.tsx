import React, { useState } from 'react';
import { RootState } from '../../types/types';
import { useAppSelector } from '../../redux/hooks/hooks';

export default function PaginationFunc() {
  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );
  const copyProduct = products.map((el) => el);

  const filterCopyProduct = copyProduct.filter((el) => el.rating > 4.5);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterCopyProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return { currentProducts, handlePageChange };
}
