// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      name: "Mang Wahyu",
      job_title: "Fullstack Developer",
      description: `Hello, I'm Mang Wahyu!

      I am a software developer. My main expertise is developing web applications and my main Soft skill is having responsibility in the workplace, very good at adapting in any situation and having a very high curiosity. Until now I am still learning until I can be better.
      Hopefully we can connect and start building connections from here!`,
    },
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserRequest(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
