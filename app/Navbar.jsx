"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal } from "./components/global/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const dataSearch = [
    ...useSelector((state) => state.project.data),
    ...useSelector((state) => state.pekerjaan.data),
  ];
  const pathName = usePathname();
  const [filtered, setFiltered] = useState([]);
  const [dataForm, setDataForm] = useState({
    search: "",
  });

  function loadData() {
    dataSearch.forEach((child) => {
      setFiltered((filtered) => {
        // Check if the element already exists in filtered array
        if (
          !filtered.some(
            (existingElement) => existingElement.title === child.title
          )
        ) {
          return [...filtered, child];
        }
        return filtered; // If element already exists, return the current state
      });
      if (child.item) {
        child.item.forEach((element) => {
          setFiltered((filtered) => {
            // Check if the element already exists in filtered array
            if (
              !filtered.some(
                (existingElement) => existingElement.title === element.title
              )
            ) {
              return [...filtered, element];
            }
            return filtered; // If element already exists, return the current state
          });
        });
      }
      
    });
  }

  function search() {
    const keyword = dataForm.search.toLowerCase();
    let data = [];

    if (keyword !== "") {
      data = filtered.filter(
        (entry) =>
          Object.values(entry).some(
            (val) =>
              typeof val === "string" && val.toLowerCase().includes(keyword)
          ) ||
          (Array.isArray(entry.category) &&
            entry.category.some((cat) =>
              cat.toLowerCase().includes(keyword)
            )) ||
          (typeof entry.company === "string" &&
            entry.company.toLowerCase().includes(keyword))
      );
      return data;
    } else {
      data = [];
      return data;
    }
  }

  useEffect(() => {
    loadData();
  });

  useEffect(() => {
    search();
  }, [dataForm.search, filtered]);

  let [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Experience",
      path: "/",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "contacts",
      path: "/kontak",
    },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="header z-[10] mb-8 sticky top-0 p-2 bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-500">
        <div className="flex gap-1 items-center justify-between mx-3">
          <div className="menu">
            {navLinks.map((link, index) => {
              const isActive = pathName == link.path;
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={
                    isActive
                      ? " is-active-menu  item-menu px-2 py-1 cursor-pointer"
                      : "item-menu px-2 py-1 cursor-pointer"
                  }
                >
                  <span className="text-xs text-white">{link.name}</span>
                </Link>
              );
            })}
          </div>
          <div
            onClick={openModal}
            className="search hover:bg-blue-700 hover:rounded-lg cursor-pointer transition-all"
          >
            <FontAwesomeIcon
              className="p-3"
              icon={faMagnifyingGlass}
              style={{ fontSize: 15, color: "white" }}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        title={"Search"}
        size={"lg"}
        closeModal={closeModal}
      >
        <div className="p-3">
          <form>
            <input
              onChange={(e) =>
                setDataForm({ ...dataForm, search: e.target.value })
              }
              placeholder="Search Experience, Tag, Project..."
              className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="name"
              name="name"
              required
            />
          </form>
          <hr className="my-3" />
          {search().length > 0 ? (
            search().map((child, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer transition mt-3 ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 hover:bg-opacity-50 border border-gray-100"
                >
                  <h5 className="font-medium">{child.title}</h5>
                  <p className="text-[12px] text-gray-400">
                    {child.company} |{" "}
                    {child?.category?.map((category, index) => {
                      return index !== 0 ? ` | ${category}` : category;
                    })}
                  </p>
                  <p></p>
                  <p className="text-[12px] text-gray-400"></p>
                </div>
              );
            })
          ) : (
            <div className="text-center">Not Found</div>
          )}
        </div>
      </Modal>
    </>
  );
}
