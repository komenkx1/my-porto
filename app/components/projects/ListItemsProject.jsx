import ExportedImage from "next-image-export-optimizer";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function ListItemProject(props) {
  return (
    <>
      <div className="body">
        <div className="pekerjaan mb-8">
          <hr className="border-gray-600 pb-8" />
          <div className="lg:grid lg:grid-cols-3 gap-5 ">
            {props?.dataItem.map((item, index) => {
              return (
                <ReactVisibilitySensor partialVisibility offset={{ bottom: -300 }} key={index}>
                  {({ isVisible }) => (
                    <div
                      className={
                        "cursor-pointer hover:!transition mt-3 ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-800  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 hover:bg-opacity-50 border border-gray-100" +
                        (isVisible
                          ? " slideUp enter text-white"
                          : "text-white slideUp")
                      }
                    >
                      <div className="">
                        <div className="thumbnail p-3 lg:block md:block hidden">
                          <div className="bg-white rounded-lg shadow-md"
                            style={{
                              width: "100%",
                              height: "200px",
                              position: "relative",
                            }}
                          >
                           <ExportedImage
                              src={item.logo}
                              alt="thumbnail-project"
                              sizes="100%"
                              fill
                              className=" rounded-lg shadow-lg"
                            />
                          </div>
                        </div>
                        <div className="info">
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-sm text-gray-300">
                            {item.company} |{" "}
                            {item.category.map((category, index) => {
                              //if not first index than give divider |
                              return index !== 0 ? ` | ${category}` : category;
                            })}
                          </p>
                          <p className="mt-3 text-justify text-white text-[14px]">
                            {/* concat desc after 100 character and give ... */}
                            {item.desc.length > 100
                              ? `${item.desc.substring(0, 100)}...`
                              : item.desc}
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
      </div>
      ;
    </>
  );
}
