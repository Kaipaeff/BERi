import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeUser } from '../../store.types';
import { getAllUsersFromBack } from '../../Thunk/User/getAllUsersFromBack';
import IOneUser from '../../../types/UserTypes';

const initialStateUsers: stateTypeUser = {
  allUsers: [],
  loading: false,
};

const userReducerSlice = createSlice({
  name: 'allUsers',
  initialState: initialStateUsers,
  reducers: {
    addUserFront: (state, action: PayloadAction<IOneUser>) =>
      (state = { ...state, allUsers: [...state.allUsers, action.payload] }),
    deleteOneUserFront: (state, action: PayloadAction<IOneUser>) =>
      (state = {
        ...state,
        allUsers: state.allUsers.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneUserFront: (state, action) =>
      (state = {
        ...state,
        allUsers: state.allUsers.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                isAdmin: action.payload.isAdmin,
                isActivated: action.payload.isActivated,
                password: action.payload.password,
                email: action.payload.email,
                phone: action.payload.phone,
              }
            : el
        ),
      }),
    findUserByEmailFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        allUsers: state.allUsers.filter((el): boolean =>
          el.email.includes(action.payload)
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = [...action.payload];
      })
      .addCase(getAllUsersFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addUserFront,
  deleteOneUserFront,
  editOneUserFront,
  findUserByEmailFront,
} = userReducerSlice.actions;

export default userReducerSlice.reducer;
