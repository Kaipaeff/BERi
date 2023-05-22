import { RootState } from '../../../types/types';

export const getAllColorSchemes = (state: RootState) =>
  state.ColorSchemeReducer.allColorSchemes;
