import { createSlice } from "@reduxjs/toolkit";
import { State } from "./index";

const initialState = {
  searchData: {},
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const Search = {
  ...search.actions,
  selectSearch: (state: State) => state.intro.searchData,
}

