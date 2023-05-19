import { RootState } from "../../types/types";

export const getChangeSexSelector = (state: RootState) =>
  state.ChangeSexReducer.sex;