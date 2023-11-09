import Image from "next/image";

export default function ListItemProject(props) {
  return (
    <>
      <div className="body">
        <div className="pekerjaan mb-8">
          <hr className="border-gray-600 pb-8" />
          <div className="lg:grid lg:grid-cols-3 gap-5 ">
            {props?.dataItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer transition mt-3 ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-800 rounded-lg rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 hover:bg-opacity-50 border border-gray-100"
                >
                  <div className="">
                    <div className="thumbnail p-3 lg:block md:block hidden">
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          position: "relative",
                        }}
                      >
                        <Image
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
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
}
