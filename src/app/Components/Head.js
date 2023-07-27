import React from "react";
export const Head = () => {
  return (
    <div className="container mx-auto  overflow-x-hidden mt-6">
      <div className="flex flex-row flex-wrap ">
        <div className="w-full   md:w-[69%] h-64 md:h-auto md:mb-4 mb-2 ">
          <a className="relative ">
            <img
              className="block w-full h-full md:h-full lg:h-[80%] xl:h-[84.5%] 2xl:h-[70.5%]  bg-no-repeat bg-center bg-cover "
              src="/images/Head 1.avif"
              alt="H1"
            />
            <div className="bg-black opacity-30 w-full h-full  absolute bottom-0 px-5"></div>
            <div className=" absolute bottom-1 px-5 ">
              <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300  hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                Opinion & Analysis
              </div>
              <a
                href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                className="  text-gray-100 font-bold text-xl md:text-3xl  capitalize"
              >
                Could the Kronos hack have been prevented?
              </a>
              <div className="flex pb-3  ">
                <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                  Derek Walborn -{" "}
                  <span className="font-light">December 23, 2021</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full  md:w-[31%] md:mb-4 md:px-2">
          <div className="flex  flex-row md:flex-col  md:-mx-2">
            <div className="w-full w-1/2 pr-2 md:w-full h-48 xl:h-64 md:mb-2  md:mb-2 md:px-2">
              <a className="relative">
                <img
                  className="block w-full h-full  bg-no-repeat bg-center bg-cover "
                  src="/images/Body-3.avif"
                  alt="H1"
                />
                <div className="bg-black opacity-50 w-full h-full  absolute bottom-0 px-5"></div>
                <div className=" absolute bottom-1 px-5 ">
                  <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                    Opinion & Analysis
                  </div>
                  <a
                    href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                    className="  text-gray-100 font-bold text-sm md:text-xl  capitalize"
                  >
                    Cybersecurity news weekly roundup
                  </a>
                  <div className="flex pb-3  ">
                    <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                      Derek Walborn -{" "}
                      <span className="font-light">December 23, 2021</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full w-1/2  md:w-full h-48 xl:h-64  md:px-2">
              <a className="relative">
                <img
                  className="block w-full h-full  bg-no-repeat bg-center bg-cover "
                  src="/images/Maximizing ROI on network equipment.avif"
                  alt="H1"
                />
                <div className="bg-black opacity-50 w-full h-full  absolute bottom-0 px-5"></div>
                <div className=" absolute bottom-1 px-5 ">
                  <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                    Opinion & Analysis
                  </div>
                  <a
                    href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                    className="  text-gray-100 font-bold text-sm md:text-xl  capitalize"
                  >
                    Could the Kronos hack have been prevented?
                  </a>
                  <div className="flex pb-3  ">
                    <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                      Derek Walborn -{" "}
                      <span className="font-light">December 23, 2021</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
