import { RootState } from '../../../types/types';

export const getFullListOfOrders = (state: RootState) =>
  state.ListOfUserOrdersReduser.fullListOfOreders;
