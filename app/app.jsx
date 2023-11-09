"use client";
import { store } from "@/redux/store";
import ProfileSection from "./ProfileSection";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import axios from "../utils/axios";
export default function App({ children }) {
  global.axios = axios;
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
