import { RootState } from '../../../types/types';

export const getFullListOfUserOrderCartElements = (state: RootState) =>
  state.FullListOfUserOrderCartElementsReducer.allUserCartOrderedElements;