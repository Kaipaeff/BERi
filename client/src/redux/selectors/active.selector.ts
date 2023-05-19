import { RootState } from "../../types/types";

export const getActiveBtnSelector = (state: RootState) =>
  state.ActivateReducer.active;