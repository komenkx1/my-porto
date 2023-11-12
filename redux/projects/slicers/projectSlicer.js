import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    data: [
      {
        id: 1,
        title: "Buavita Sale Mobile App",
        logo: "/static/img/thumbnail/buavita.png",
        company: "Technology Colaboration",
        category: ["Flutter", "Android", "IOS", "Multi Platform"],
        desc: "Buavita Sale is a mobile application that is used to  manage sell Buavita products. This application is made using the Flutter framework.",
      },
      {
        id: 2,
        title: "Pertashop Management System",
        logo: "/static/img/thumbnail/pertashop.png",
        company: "Technology Colaboration",
        category: ["Laravel", "Livewire", "Bootstrap"],
        desc: "Pertashop Management System is a web application that is used to manage Pertashop. This application is made using the Fullstack Laravel framework.",
      },
      {
        id: 3,
        title: "Recruitment System BEM FK UDAYANA",
        logo: "/static/img/thumbnail/bemfk.jpg",
        company: "Technology Colaboration",
        category: ["Laravel", "Livewire", "Bootstrap"],
        desc: "Recruitment Management System BEM FK UDAYANA is a web application that is used to manage recruitment in BEM FK UDAYANA. This application is made using the Fullstack Laravel framework.",
      },
      {
        id: 4,
        title: "Sistem Informasi Koordinasi Pendidikan (SIKODI)",
        logo: "/static/img/thumbnail/sikodi.png",
        company: "Technology Colaboration",
        category: ["Laravel", "VueJS", "NuxtJS"],
        desc: "SIKODI is a web application that is used to manage the coordination of co-ass student. This application is made using the Laravel as Back-End and NuxtJS as Front-End.",
      },
      {
        id: 5,
        title: "Passtru",
        logo: "/static/img/thumbnail/passtru.png",
        company: "Technology Colaboration",
        category: ["Java"],
        desc: "Passtru is a mobile native application for save a credentials. this app build using java native for android and have a fingerprint security.",
      },
      {
        id: 6,
        title: "JSDDD Mobile",
        logo: "/static/img/thumbnail/jsddd.png",
        company: "Pt. Laksita Emi Saguna",
        category: ["Flutter","Laravel"],
        desc: "JSDDD is a survey application for the welfare level of the residents of Jembrana Regency. JSDDD mobile itself was created to make it easier for surveyors to collect data from residents",
      },
      {
        id: 6,
        title: "Balimed SIM RS",
        logo: "/static/img/thumbnail/balimed.png",
        company: "Pt. Laksita Emi Saguna",
        category: ["VueJS","Laravel"],
        desc: "Balimed SIM RS is a web application for manage a hospital data. this app haeve 40++ module and build using laravel as back-end and vuejs as front-end.",
      },
      {
        id: 7,
        title: "Faxine",
        logo: "/static/img/thumbnail/faxine.png",
        company: "Technology Colaboration",
        category: ["VueJS","Laravel"],
        desc: "Faxine is a web application that contains a information about Covid-19. this app build using laravel as back-end and vuejs as front-end.",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    projectRequest(state) {
      state.loading = true;
    },
    projectSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    projectFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  projectSlice.actions;

export default projectSlice.reducer;
