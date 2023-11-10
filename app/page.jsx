"use client";
import { useDispatch, useSelector } from "react-redux";
import ListItemExperience from "./components/experiences/ListItemExperience";
import { fetchExperienceData } from "@/redux/working-experience/actions/workingActions";
import { useEffect, useState } from "react";
export default function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  async function fetchExp() {
    dispatch(fetchExperienceData());
    setIsLoading(false);
  }

  useEffect(() => {
    fetchExp();
  }, []);
  const experiences = [...useSelector((state) => state.pekerjaan.data)];

  return (
    <>
      <ListItemExperience dataItem={experiences} />
    </>
  );
}
