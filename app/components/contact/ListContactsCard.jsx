import Image from "next/image";

export default function ListContactsCard(props) {
  return (
    <>
      <div className="body">
        <div className="pekerjaan mb-8">
          <hr className="border-gray-600 pb-8" />
          <div className="w-full">
            {props.dataItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer col-span-2 transition mt-3 ease-in-out hover:-translate-y-1 hover:scale-95 p-3 bg-gray-600 rounded-lg bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 hover:bg-opacity-50 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="thumbnail rounded-lg w-[150px] h-[150px] p-3 lg:block md:block hidden">
                      <Image
                        src={item.logo}
                        alt="experience-logo"
                        width={150}
                        height={150}
                        className="rounded-lg drop-shadow-2xl mt-2"
                      />
                    </div>
                    <div className="info w-[450px]">
                      <p className="font-medium text-white">{item.account}</p>
                      <p className="mt-1 text-sm text-gray-300">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        );
      </div>
    </>
  );
}
