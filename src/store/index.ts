import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { addUsersBulk, deleteAllUsers } from "db";
import userDataReducer from "store/users";

const localStorageMiddleware: Middleware<{}, RootState> = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    deleteAllUsers().then(() => addUsersBulk(getState().users.data));

    return result;
  };
};

const rootReducer = combineReducers({ users: userDataReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [localStorageMiddleware],
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
