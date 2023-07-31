import React from "react";

export const Head = () => {
  return (
    <div className="container  mt-1 md:mt-0 flex row-span-1 gap-1 md:grid md:grid-cols-1 mx-auto w-full">
      <div className="aspect-auto md:mx-10 2xl:mx-0 w-auto">
        <a href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/" className="relative">
          <img
            className="block w-full  md:w-[80rem] lg:w-[200rem]  md:h-[30rem] object-cover object-center"
            src="/images/Head 1.avif"
            alt="H1"
            layout="responsive"
            loading="lazy"
          />
          <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5 "></div>
          <div className="absolute bottom-1 px-5">
            <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
              Opinion & Analysis
            </div>
            <div href="/" className="text-gray-100 font-bold text-sm md:text-xl capitalize">
              Could the Kronos hack have been prevented?
            </div>
            <div className="flex pb-3">
              <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                Derek Walborn - <span className="font-light">December 23, 2021</span>
              </div>
            </div>
          </div>
        </a>

        <div className=" flex mt-1 gap-1">
          <div className="w-full ">
            <a href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/" className="relative">
              <img
                className="block w-full h-48 md:h-[15rem] object-cover object-center"
                src="/images/Body-3.avif"
                alt="H1"
                layout="responsive"
                loading="lazy"
              />
              <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
              <div className="absolute bottom-1   px-5">
                <div className="bg-neutral-600  w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                  Opinion & Analysis
                </div>
                <div href="/" className="text-gray-100 font-bold text-sm md:text-xl capitalize">
                  Cybersecurity news weekly roundup
                </div>
                <div className="flex pb-3">
                  <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                    Derek Walborn - <span className="font-light">December 23, 2021</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full ">
            <a href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/" className="relative">
              <img
                className="block w-full md:h-[15rem] h-48 object-cover object-center"
                src="/images/Maximizing ROI on network equipment.avif"
                alt="H1"
                layout="responsive"
                loading="lazy"
              />
              <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
              <div className="absolute bottom-1 px-5">
                <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                  Opinion & Analysis
                </div>
                <div href="/" className="text-gray-100 font-bold text-sm md:text-xl capitalize">
                  Could the Kronos hack have been prevented?
                </div>
                <div className="flex pb-3">
                  <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                    Derek Walborn - <span className="font-light">December 23, 2021</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
