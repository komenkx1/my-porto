// userActions.js

import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../slicers/userSlicer";

export const fetchUserData = () => async (dispatch) => {
  
  try {
    dispatch(fetchUserRequest());
    const response = await global.axios.get("/api/users/31"); // Ganti URL sesuai kebutuhan
    dispatch(fetchUserSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
