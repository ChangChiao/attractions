import { createSlice } from "@reduxjs/toolkit";
import { State } from "../index";

const initialState = {
  introData: {},
};

export const intro = createSlice({
  name: "intro",
  initialState,
  reducers: {
    setIntroData: (state, action) => {
      state.introData = action.payload;
    },
  },
});

export const Intro = {
  ...intro.actions,
  selectIntro: (state: State) => state.intro.introData,
};
