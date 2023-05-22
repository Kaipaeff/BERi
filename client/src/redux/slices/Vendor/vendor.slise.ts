import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeVendor } from '../../store.types';
import { getAllVendorFromBack } from '../../Thunk/Vendors/getAllVendorsFromBack';
import IOneVendor from '../../../types/VendorTypes';

const initialStateVendors: stateTypeVendor = {
  allVendors: [],
  loading: false,
};

const userReducerSlice = createSlice({
  name: 'allVendors',
  initialState: initialStateVendors,
  reducers: {
    addVendorFront: (state, action: PayloadAction<IOneVendor>) =>
      (state = { ...state, allVendors: [...state.allVendors, action.payload] }),
    deleteOneVendorFront: (state, action: PayloadAction<IOneVendor>) =>
      (state = {
        ...state,
        allVendors: state.allVendors.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneVendorFront: (state, action) =>
      (state = {
        ...state,
        allVendors: state.allVendors.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                name: action.payload.name,
                country: action.payload.country,
                premium: action.payload.premium,
              }
            : el
        ),
      }),
    findVendorByNameOrCountryFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        allVendors: state.allVendors.filter(
          (el): boolean =>
            el.name.toUpperCase().includes(action.payload.toUpperCase()) ||
            el.country.toUpperCase().includes(action.payload.toUpperCase())
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVendorFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVendorFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allVendors = [...action.payload];
      })
      .addCase(getAllVendorFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addVendorFront,
  deleteOneVendorFront,
  editOneVendorFront,
  findVendorByNameOrCountryFront,
} = userReducerSlice.actions;

export default userReducerSlice.reducer;
