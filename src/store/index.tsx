import { PropsWithChildren } from "react";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { search, intro } from "./slice";
import { API } from "../api/api";
import { Provider, useDispatch as useDispatchWith, useSelector as useSelectorWith } from "react-redux";
// import thunk from "redux-thunk";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"],
};

const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      [intro.name]: intro.reducer,
      [search.name]: search.reducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(API.middleware),
});

const persistor = persistStore(store);

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export function useDispatch() {
  return useDispatchWith<Dispatch>();
}

export function useSelector<T>(selector: (state: State) => T) {
  return useSelectorWith<State, T>(selector);
}
// export default configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
//   whitelist: ["cityList", "searchData", "introData"],
// });
export function StoreProvider({ children }: PropsWithChildren<{}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export * from "./slice";
