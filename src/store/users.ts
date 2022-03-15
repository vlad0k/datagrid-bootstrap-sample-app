import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { UserType } from "types";

interface IState {
  data: UserType[];
}

const INITIAL_USER_DATA: UserType[] = [];

const initialState: IState = {
  data: INITIAL_USER_DATA,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData: (state, action: PayloadAction<UserType[]>) => {
      state.data = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    deleteAllUsers: (state) => {
      state.data = [];
    },
    addUser: (state, action: PayloadAction<UserType>) => {
      state.data = [...state.data, action.payload];
    },
    editUser: (state, action: PayloadAction<UserType>) => {
      state.data = state.data.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { deleteUser, addUser, editUser, setUsersData, deleteAllUsers } =
  usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const usersDataSelector = createSelector(
  usersSelector,
  (users) => users.data
);

export const usersAmountSelector = createSelector(
  usersSelector,
  (users) => users.data.length
);

const userDataReducer = usersSlice.reducer;

export default userDataReducer;
