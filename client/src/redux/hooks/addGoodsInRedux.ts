import { useAppDispatch, useAppSelector } from './hooks';
import { addGoodsReducer } from '../../redux/slices/shopCard/card.slice';

export const useAddGoodsInRedux = (state: any) => {
  const dispatch = useAppDispatch();
  const resDispatch = dispatch(addGoodsReducer(state));

  const result = useAppSelector((state: any) => state.CartSlice.goods);

  return {
    resDispatch,
    result,
  };
};
