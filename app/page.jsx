"use client";
import { useSelector } from "react-redux";
import ListItemExperience from "./components/experiences/ListItemExperience";
export default function Home() {
  const experiences = [...useSelector((state) => state.pekerjaan.data)];
  return (
    <>
     <ListItemExperience dataItem={experiences} />
    </>
  );
}
