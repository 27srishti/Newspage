import React from "react";
export const Head = () => {
  return (
    <div className="container mx-auto m-2 overflow-x-hidden">
      <div className="flex flex-row flex-wrap md:-mx-2">
        <div className="w-full md:w-[69%] h-64 md:h-auto md:mb-4 mb-2 ">
          <a
            className="block  w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{
              backgroundImage:
                "url(https://news.networktigers.com/wp-content/uploads/2023/07/20230717_Cybersecurity-News-696x348.jpg)",
            }}
          >text</a>
        </div>
        <div className="w-full  md:w-[31%] md:mb-4 md:px-2">
          <div className="flex  flex-row md:flex-col  md:-mx-2">
            <div className="w-full w-1/2 pr-2 md:w-full h-48 xl:h-64 md:mb-2  md:mb-2 md:px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url(https://news.networktigers.com/wp-content/uploads/2023/07/role-of-switches_dreamstime_m_278820024-696x390.jpg)",
                }}
              >
                Link
              </a>
            </div>
            <div className="w-full w-1/2  md:w-full h-48 xl:h-64  md:px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url(https://news.networktigers.com/wp-content/uploads/2023/06/Importance-of-firewalls_dreamstime_m_113116395-696x627.jpg)",
                }}
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
