import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeColorScheme } from '../../store.types';

import IOneColorElement from '../../../types/ColorTable.types';
import { getAllColorSchemesFromBack } from '../../Thunk/ColorScheme/getAllColorSchemesFromBack';

const initialStateCategories: stateTypeColorScheme = {
  allColorSchemes: [],
  loading: false,
};

const colorSchemesSlice = createSlice({
  name: 'allColorSchemes',
  initialState: initialStateCategories,
  reducers: {
    addColorSchemeFront: (state, action: PayloadAction<IOneColorElement>) => {
      return (state = {
        ...state,
        allColorSchemes: [...state.allColorSchemes, action.payload],
      });
    },
    deleteOneColorSchemeFront: (state, action: PayloadAction<IOneColorElement>) =>
      (state = {
        ...state,
        allColorSchemes: state.allColorSchemes.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneColorSchemeFront: (state, action: PayloadAction<IOneColorElement>) =>
      (state = {
        ...state,
        allColorSchemes: state.allColorSchemes.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                color: action.payload.color,
                colorCode: action.payload.colorCode,
              }
            : el
        ),
      }),
    findColorSchemeByOrCodeFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        allColorSchemes: state.allColorSchemes.filter((el): boolean =>
          el.color.toUpperCase().includes(action.payload.toUpperCase()) || 
          el.colorCode.toUpperCase().includes(action.payload.toUpperCase())
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllColorSchemesFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllColorSchemesFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allColorSchemes = [...action.payload];
      })
      .addCase(getAllColorSchemesFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
    addColorSchemeFront,
    deleteOneColorSchemeFront,
    editOneColorSchemeFront,
    findColorSchemeByOrCodeFront,
} = colorSchemesSlice.actions;

export default colorSchemesSlice.reducer;