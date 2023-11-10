// userActions.js

import {
  fetchExperienceRequest,
  fetchExperienceSuccess,
  fetchExperienceFailure,
} from "../slicers/workingSlicer";

export const fetchExperienceData = () => async (dispatch) => {
  try {
    dispatch(fetchExperienceRequest());
    const response = await global.axios.get("/api/categories"); // Ganti URL sesuai kebutuhan
    dispatch(fetchExperienceSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchExperienceFailure(error.message));
  }
};
