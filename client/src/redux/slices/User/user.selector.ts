import { RootState } from '../../../types/types';

export const getAllUsers = (state: RootState) =>
  state.UserReducer.allUsers;