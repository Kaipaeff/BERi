import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeListOfOrders } from '../../store.types';
import IOneOrderElement, {
  IOneOrderChangeStatus,
} from '../../../types/ListOfOrders.type';
import { getFullListOfOrdersFromBack } from '../../Thunk/ListOfOrders/getFullListOfOrdersFromBack';

const initialStateListOfOrders: stateTypeListOfOrders = {
  fullListOfOreders: [],
  loading: false,
};

const listOfUserOrdersReduserSlice = createSlice({
  name: 'fullListOfOreders',
  initialState: initialStateListOfOrders,
  reducers: {
    addOrderElementFront: (state, action: PayloadAction<IOneOrderElement>) => {
      return (state = {
        ...state,
        fullListOfOreders: [...state.fullListOfOreders, action.payload],
      });
    },
    deleteOneOrderElementFront: (
      state,
      action: PayloadAction<IOneOrderElement>
    ) =>
      (state = {
        ...state,
        fullListOfOreders: state.fullListOfOreders.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneOrderElementFront: (
      state,
      action: PayloadAction<IOneOrderElement>
    ) => {
      const newState = {
        ...state,
        fullListOfOreders: state.fullListOfOreders.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                userId: action.payload.userId,
                totalOrderPrice: action.payload.totalOrderPrice,
                addressId: action.payload.addressId,
                accepted: action.payload.accepted,
                processed: action.payload.processed,
                completed: action.payload.completed,
                canceled: action.payload.canceled,
              }
            : el
        ),
      };
      return (state = newState);
    },
    editOneOrderElementStatusByAdminFront: (
      state,
      action: PayloadAction<IOneOrderElement>
    ) =>
      (state = {
        ...state,
        fullListOfOreders: state.fullListOfOreders.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                accepted: action.payload.accepted,
                processed: action.payload.processed,
                completed: action.payload.completed,
                canceled: action.payload.canceled,
                userId: action.payload.userId,
                totalOrderPrice: action.payload.totalOrderPrice,
              }
            : el
        ),
      }),
    findOneOrderElementByIdFront: (state, action: PayloadAction<number>) =>
      (state = {
        ...state,
        fullListOfOreders: state.fullListOfOreders.filter(
          (el): boolean => el.id === action.payload
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullListOfOrdersFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFullListOfOrdersFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.fullListOfOreders = [...action.payload];
      })
      .addCase(getFullListOfOrdersFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addOrderElementFront,
  deleteOneOrderElementFront,
  editOneOrderElementFront,
  editOneOrderElementStatusByAdminFront,
  findOneOrderElementByIdFront,
} = listOfUserOrdersReduserSlice.actions;

export default listOfUserOrdersReduserSlice.reducer;
