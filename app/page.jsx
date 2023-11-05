import ProfileSection from "./ProfileSection";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
    <div className="body">
      <div className="pekerjaan mb-8">
        <p className="text-xl sm:text-2xl font-bold text-white pb-3">Pekerjaan</p>
        <hr className="border-gray-600 pb-8" />
        <div className="grid lg:grid-cols-2 gap-5">
          <div  className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="thumbnail rounded-lg w-[350px] h-[90px] lg:block md:block hidden bg-white"></div>
              <div className="info">
                <p className="font-medium text-white">Software Developer</p>
                <p className="mt-1 text-sm text-gray-300">
                  PT. Laksita Emi Saguna Sep 2019 - Sekarang
                </p>
                <p className="mt-4 text-justify text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sit rem tempora dolore voluptatum, nulla ipsum voluptate
                  animi dolorum temporibus labore minus sapiente explicabo,
                  ratione velit architecto ipsa repudiandae quos esse.
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="thumbnail rounded-lg w-[350px] h-[90px] lg:block md:block hidden bg-white"></div>
              <div className="info">
                <p className="font-medium text-white">Software Developer</p>
                <p className="mt-1 text-sm text-gray-300">
                  PT. Laksita Emi Saguna Sep 2019 - Sekarang
                </p>
                <p className="mt-4 text-justify text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sit rem tempora dolore voluptatum, nulla ipsum voluptate
                  animi dolorum temporibus labore minus sapiente explicabo,
                  ratione velit architecto ipsa repudiandae quos esse.
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="thumbnail rounded-lg w-[350px] h-[90px] lg:block md:block hidden bg-white"></div>
              <div className="info">
                <p className="font-medium text-white">Software Developer</p>
                <p className="mt-1 text-sm text-gray-300">
                  PT. Laksita Emi Saguna Sep 2019 - Sekarang
                </p>
                <p className="mt-4 text-justify text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sit rem tempora dolore voluptatum, nulla ipsum voluptate
                  animi dolorum temporibus labore minus sapiente explicabo,
                  ratione velit architecto ipsa repudiandae quos esse.
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="thumbnail rounded-lg w-[350px] h-[90px] lg:block md:block hidden bg-white"></div>
              <div className="info">
                <p className="font-medium text-white">Software Developer</p>
                <p className="mt-1 text-sm text-gray-300">
                  PT. Laksita Emi Saguna Sep 2019 - Sekarang
                </p>
                <p className="mt-4 text-justify text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sit rem tempora dolore voluptatum, nulla ipsum voluptate
                  animi dolorum temporibus labore minus sapiente explicabo,
                  ratione velit architecto ipsa repudiandae quos esse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </>
  );
}
