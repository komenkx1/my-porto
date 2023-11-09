import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slicers/userSlicer";
import workingSlicer from "./working-experience/slicers/workingSlicer";
import projectSlicer from "./projects/slicers/projectSlicer";
import kontakSlicer from "./kontak/slicers/kontakSlicer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pekerjaan:workingSlicer,
    project:projectSlicer,
    kontak:kontakSlicer
  },
});
