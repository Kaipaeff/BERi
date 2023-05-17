import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import React, {createContext} from 'react';
import StoreContext from "./storeContext/storeContext";

import App from './App';

interface State {
  storeContext: StoreContext,
}

export const storeContext = new StoreContext();

export const Context = createContext<State>({
  storeContext,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  // <Provider store={store}>
    <BrowserRouter>
    <Context.Provider value={{
        storeContext
    }}>
       <App />
       </Context.Provider>,
    </BrowserRouter>
  // </Provider>
);
