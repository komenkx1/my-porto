import Image from "next/image";
import ReactVisibilitySensor from "react-visibility-sensor";
import { loader } from "next/image";
export default function ListItem(props) {
  return (
    <>
      <div className="body">
        {props.dataItem?.map((experience, index) => {
          return (
            <div key={index} className="pekerjaan mb-8">
              <p className="text-xl sm:text-2xl font-bold text-white pb-3">
                {experience.name}
              </p>
              <hr className="border-gray-600 pb-8" />
              <div className="lg:grid lg:grid-cols-2 gap-5 ">
                {experience?.experiences?.map((item, index) => {
                  return (
                    <ReactVisibilitySensor
                      partialVisibility
                      offset={{ bottom: -300 }}
                      key={index}
                    >
                      {({ isVisible }) => (
                        <div
                          className={
                            "cursor-pointer transition mt-3 ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 hover:bg-opacity-50 border border-gray-100" +
                            (isVisible
                              ? " slideUp enter text-white"
                              : "text-white slideUp")
                          }
                        >
                          <div className="flex items-center gap-3">
                            <div className="thumbnail rounded-lg w-[150px] h-[150px] p-3 lg:block md:block hidden">
                              <Image
                                loader={({ src }) => src}
                                src={
                                  item?.logo != null
                                    ? `${global.apibaseUrl}/${item?.logo}`
                                    : "/img/icon/next.png"
                                }
                                alt="experience-logo"
                                width={150}
                                height={150}
                                className="rounded-lg drop-shadow-2xl mt-2"
                              />
                            </div>
                            <div className="info w-[450px]">
                              <p className="font-medium text-white">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm text-gray-300">
                                {item.companys?.name}{" "}
                                {global.formatDate(item.start_date)} -{" "}
                                {item.is_present
                                  ? "Present"
                                  : global.formatDate(item.end_date)}
                              </p>
                              <p className="mt-3 text-justify text-white text-[14px]">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </ReactVisibilitySensor>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}
