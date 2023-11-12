import { useSelector } from "react-redux";
import ExportedImage from "next-image-export-optimizer";
import ProfileSkeleton from "./components/global/ProfileSkeleton";
import { useDispatch } from "react-redux";
import { fetchUserData } from "@/redux/users/actions/userAction";
import { use, useEffect, useState } from "react";
export default function ProfileSection() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // dispatch(fetchUserData());
    setIsLoading(false);
  }, []);

  const user = useSelector((state) => state.user.data);

  return (
    <>
      {isLoading && user == null ? (
        <ProfileSkeleton />
      ) : (
        <div className="mx-h-screen lg:w-[300px] md:w-full p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
          <div className="left-section">
            <div className="flex justify-center">
              <div className="w-[300px] px-5 py-[20px] flex justify-center">

                  <ExportedImage
                    src='/static/img/mangwahyu.png'
                    alt="thumbnail-project"
                    // bg-center bg-cover
                    sizes="100%"
                    width={150}
                    height={150}
                    className="rounded-full border border-gray-600 shadow-lg w-[150px] h-[150px]"
                  />
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
                  <ExportedImage
                    className="mt-[5px]"
                    src="/static/img/icon/github.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/js.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-2 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/vuejs.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/react.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/nuxt.webp"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    className="mt-[2px]"
                    src="/static/img/icon/next.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 p-2 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    className="mt-[1px]"
                    src="/static/img/icon/node.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-1 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    className="mt-[2px]"
                    src="/static/img/icon/php.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/laravel.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 w-[45px] h-[45px]  p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                  <ExportedImage
                    src="/static/img/icon/flutter.png"
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
