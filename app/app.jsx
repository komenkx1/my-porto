"use client";
import { store } from "@/redux/store";
import ProfileSection from "./ProfileSection";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { instance, baseUrl } from "../utils/axios";
import formatDate from "@/utils/formatDate";
export default function App({ children }) {
  global.axios = instance;
  global.apibaseUrl = baseUrl;
  global.formatDate = formatDate;
  return (
    <div className="lg:flex lg:gap-[15px]">
      <Provider store={store}>
        <ProfileSection />
        <div className="body-right w-full h-screen overflow-auto no-scrollbar mt-8 lg:mt-0">
          <Navbar />
          {children}
        </div>
      </Provider>
    </div>
  );
}
