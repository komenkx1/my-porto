import { createSlice } from "@reduxjs/toolkit";

const kontakSlice = createSlice({
  name: "kontak",
  initialState: {
    data: [
     
          {
            id: 1,
            title: "LinkedIn",
            logo: "/static/img/icon/linkedIn.png",
            account: "www.linkedin.com/in/mangwahyu/",
            link:"https://www.linkedin.com/in/mangwahyu/"
          },
          {
            id: 2,
            title: "Email",
            logo: "/static/img/icon/mail.png",
            account: "komangpermana7@gmail.com",
            link:"mailto:komangpermana7@gmail.com"
          },
          {
            id: 3,
            title: "Instagram",
            logo: "/static/img/icon/instagram.png",
            account: "Mangwahyu19",
            link:"https://www.instagram.com/mangwahyu19/"
          },
      
    ],
    loading: false,
    error: null,
  },
  reducers: {
    fetchSosmedRequest(state) {
      state.loading = true;
    },
    fetchSosmedSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchSosmedFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchSosmedRequest, fetchSosmedSuccess, fetchSosmedFailure } =
  kontakSlice.actions;

export default kontakSlice.reducer;
