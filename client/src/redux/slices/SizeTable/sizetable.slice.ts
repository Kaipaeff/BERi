import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeSizeTable } from '../../store.types';
import IOneSize from '../../../types/Size.types';
import { getAllSizesFromBack } from '../../Thunk/SizeTable/getAllSiseFromBack';

const initialStateSizeTable: stateTypeSizeTable = {
  allSizes: [],
  loading: false,
};

const sizeTableReducerSlice = createSlice({
  name: 'allSizes',
  initialState: initialStateSizeTable,
  reducers: {
    addSizeFront: (state, action: PayloadAction<IOneSize>) => {
      return (state = {
        ...state,
        allSizes: [...state.allSizes, action.payload],
      });
    },
    deleteOneSizeFront: (state, action: PayloadAction<IOneSize>) =>
      (state = {
        ...state,
        allSizes: state.allSizes.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneSizeFront: (state, action: PayloadAction<IOneSize>) =>
      (state = {
        ...state,
        allSizes: state.allSizes.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                size: action.payload.size,
              }
            : el
        ),
      }),
    findSizeFront: (state, action: PayloadAction<number>) =>
      (state = {
        ...state,
        allSizes: state.allSizes.filter(
          (el): boolean => el.size === action.payload
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSizesFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSizesFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allSizes = [...action.payload];
      })
      .addCase(getAllSizesFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addSizeFront,
  deleteOneSizeFront,
  editOneSizeFront,
  findSizeFront,
} = sizeTableReducerSlice.actions;

export default sizeTableReducerSlice.reducer;
