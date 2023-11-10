import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: "Experience",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchExperienceRequest(state) {
      state.loading = true;
    },
    fetchExperienceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchExperienceFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchExperienceRequest,
  fetchExperienceSuccess,
  fetchExperienceFailure,
} = experienceSlice.actions;

export default experienceSlice.reducer;
