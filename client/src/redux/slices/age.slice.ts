import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateAgeType } from '../store.types';
import { getAge } from '../Thunk/Age/getAge';
import IOneAge from '../../types/Age.type';

const initialState: stateAgeType = {
  age: [],
  loading: false,
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    addAgeFront: (state, action: PayloadAction<IOneAge>) => {
      return (state = {
        ...state,
        age: [...state.age, action.payload],
      });
    },
    deleteOneAgeFront: (state, action: PayloadAction<IOneAge>) =>
      (state = {
        ...state,
        age: state.age.filter((el): boolean => el.id !== action.payload.id),
      }),
    editOneAgeFront: (state, action) =>
      (state = {
        ...state,
        age: state.age.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                age: action.payload.age,
              }
            : el
        ),
      }),
    findAgeFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        age: state.age.filter((el): boolean =>
          el.age.toUpperCase().includes(action.payload.toUpperCase())
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAge.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAge.fulfilled, (state, action) => {
        state.loading = false;
        state.age = [...action.payload];
      })
      .addCase(getAge.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export const { addAgeFront, deleteOneAgeFront, editOneAgeFront, findAgeFront } =
  ageSlice.actions;

export default ageSlice.reducer;
