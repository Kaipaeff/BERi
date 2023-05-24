import { RootState } from '../../../types/types';

export const getAllSizes = (state: RootState) =>
  state.SizeTableReducer.allSizes;
