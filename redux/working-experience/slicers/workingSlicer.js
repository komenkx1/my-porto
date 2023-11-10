
import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    data: [
      {
        name: "Experience",
        item: [
          {
            id: 1,
            title: "Software Developer",
            logo: "/static/img/icon/laksita.png",
            company: "PT. Laksita Emi Saguna",
            periode: "2022 - 2023",
            desc: "Pt. Laksita Emi Saguna is a software house that operates in the field of web and mobile based application development. On this company my position is fullstack developer.",
          },
          {
            id: 2,
            title: "Web Developer",
            logo: "/static/img/icon/baligatra.png",
            company: "Bali Gatra",
            periode: "2021 - 2021",
            desc: "Bali Gatra is a Software Agency that operates in the field of web and mobile based application development. On this company my position is web developer.",
          },
          {
            id: 3,
            title: "Fullstack Developer",
            logo: "/static/img/icon/techcolab.png",
            company: "Technology Colaboration",
            periode: "2019 - Now",
            desc: "Technology Colaboration is a brand when I work as a freelancer. On this company my position is fullstack developer.",
          },
        ],
      },
      {
        name: "Education",
        item: [
          {
            id: 1,
            title: "Bachelor of Information Technology",
            logo: "/static/img/icon/unud.png",
            company: "Universitas Udayana",
            periode: "2019 - 2023",
            desc: "IPK: 3.84/4.0",
          },
          {
            id: 2,
            title: "Vocational school graduate",
            logo: "/static/img/icon/stikmas.png",
            company: "SMK Negeri 1 Mas Ubud",
            periode: "2016 - 2019",
            desc: "",
          },
        ],
      },
      {
        name: "Certification",
        item: [
          {
            id: 1,
            title: "Menjadi Fron-end Developer Expert",
            logo: "/static/img/icon/dicoding.webp",
            company: "Dicoding",
            periode: "2022 - 2025",
            desc: "I am certified as a Fornt-end Developer Javascript Expert by Dicoding Indonesia. This certificate is obtained after completing the Flutter Developer Expert course.",
          },
          {
            id: 2,
            title: "Menjadi Flutter Developer Expert",
            logo: "/static/img/icon/dicoding.webp",
            company: "Dicoding",
            periode: "2022 - 2025",
            desc: "I am certified as a Flutter Developer Expert by Dicoding Indonesia. This certificate is obtained after completing the Flutter Developer Expert course.",
          },
          {
            id: 3,
            title: "Architecting on AWS",
            logo: "/static/img/icon/dicoding.webp",
            company: "Dicoding",
            periode: "2022 - 2025",
            desc: "I am complated Architecting on AWS course by Dicoding Indonesia. This certificate is obtained after completing the Architecting on AWS course.",
          },
          {
            id: 4,
            title: "Data Management Staff",
            logo: "/static/img/icon/lsp.jpeg",
            company: "LSP Telekomunikasi Indonesia",
            periode: "2021 - 2024",
            desc: "I am certified as a Data Management Staff by LSP Telekomunikasi Indonesia. This certificate is obtained after completing the Data Management Staff course.",
          },
          {
            id: 5,
            title: "Technical Support Fundamental",
            logo: "/static/img/icon/google.webp",
            company: "Google Coursera",
            periode: "2021 - 2024",
            desc: "I am complated Technical Support Fundamental course by Google Coursera. This certificate is obtained after completing the Technical Support Fundamental course.",
          },
        ],
      },
    ],
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

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  experienceSlice.actions;

export default experienceSlice.reducer;
