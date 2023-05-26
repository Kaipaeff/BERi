import { store } from '../redux/store/store';
import { productType } from './product';

// export type Props = {
//   children: React.ReactNode;
// };

export type El = {
  el: productType;
};

export type ElSearch = {
  el: productType;
};

type HandleClickFunction = (category: number) => void;

export type OnClick = {
  onClick: HandleClickFunction;
};


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
