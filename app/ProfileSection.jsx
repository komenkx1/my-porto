"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import ProfileSkeleton from "./components/global/ProfileSkeleton";
import { useDispatch } from "react-redux";
import { fetchUserData } from "@/redux/users/actions/userAction";
import { use, useEffect, useState } from "react";
export default function ProfileSection() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  async function fetchUser() {
    dispatch(fetchUserData());
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const user = useSelector((state) => state.user.data);

  return (
    <>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="mx-h-screen lg:w-[300px] md:w-full p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
          <div className="left-section">
            <div className="flex justify-center">
              <div className="w-[300px] px-5 py-[20px] flex justify-center">
                <div className="rounded-full border border-gray-600 shadow shadow-lg w-[150px] h-[150px] bg-[url('/img/mangwahyu.png')] bg-center bg-cover"></div>
              </div>
            </div>
            <hr className="border border-gray-500 my-3 border-[1px]" />
            <div className="text-center">
              <h1 className=" text-xl text-white sm:text-lg leading-8 font-bold cursor-pointer">
                {user?.name}
              </h1>
              <p className="text-sm mt-1 text-gray-300 leading-6 sm:leading-7">
                {/* Programmer, Front End Developer, Back End Developer */}
                {user?.job_title}
              </p>
            </div>
            <div className="about mt-3 text-justify mx-3 text-md  ">
              <p className="text-white  mb-2">About Me</p>
              <p className="text-[13px] leading-5 text-white">
                {user?.description}
              </p>
            </div>
            <div className="about mt-5 mb-4 text-justify  mx-3">
              <p className="text-white">Skills</p>;
              <div className="lg:grid lg:grid-cols-5 flex flex-wrap gap-3 lg:justify-normal justify-between items-center">
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    className="mt-[5px]"
                    src="/img/icon/github.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image src="/img/icon/js.png" alt="" width={60} height={60} />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-2 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    src="/img/icon/vuejs.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    src="/img/icon/react.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    src="/img/icon/nuxt.webp"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    className="mt-[2px]"
                    src="/img/icon/next.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 p-2 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    className="mt-[1px]"
                    src="/img/icon/node.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-1 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    className="mt-[2px]"
                    src="/img/icon/php.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    src="/img/icon/laravel.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <Image
                    src="/img/icon/flutter.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
