"use client";

import { useSelector } from "react-redux";
import ListItemProject from "../components/projects/ListItemsProject";

export default function Project() {
  const projects = [...useSelector((state) => state.project.data)];

  return (
    <>
      <h3 className="text-xl sm:text-2xl font-bold text-white pb-3">Projects</h3>
      <ListItemProject dataItem={projects} />
    </>
  );
}
