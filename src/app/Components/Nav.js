import React from "react";
import Image from "next/image";
import Logo from "../Images/Logo.png";
import Icon from "../Images/icons.png";
// import Date from "../Components/Date"
const links = ["services", "blog"];

export const Nav = () => {
  return (
    <section>
      {/****************************************************** Top **************************************** */}
      <header className="bg-white  grid justify-evenly gap-10 hidden -my-1 shadow-lg h-10  md:flex">
        <nav className="block md:visible  ">
          {" "}
          <ul className="flex items-center mr-4  lg:mr-6 xl:mr-8 ">
            <li className=" bg-lime-600 px-1    py-1 text-sm text-white font-semibold rounded-b ">
              {" "}
              TRENDING NOW{" "}
            </li>
            <li className="font-normal m-2 text-xs">
              Cybersecurity news weekly roundup July 10, 2023
            </li>
            <li className="w-5  flex">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/right-squared--v1.png"
                alt="right-squared--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/left-squared--v1.png"
                alt="left-squared--v1"
              />
            </li>
            <li className="ml-5 text-xs text-gray-500 ">Sign in / Join</li>
          </ul>
        </nav>
      </header>

      {/******************************************** middle********************************************* */}

      <header className="bg-white grid justify-evenly shadow-lg h-24 hidden  sm:visible md:flex">
        <nav className="hidden  sm:visible xl:contents">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li className="p-1">
              <a
                href
                className="inline-block rounded-full  p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <svg
                  className="h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </a>
            </li>
            <li className="p-1">
              <a
                href
                className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <svg
                  className="h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </a>
            </li>
            <li className="p-1">
              <a
                href
                className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <svg
                  className="h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </a>
            </li>

            <h1 className=" pl-5 text-base font-light  "> {/* <Date/> */}</h1>
          </ul>
        </nav>
        <a
          href
          className=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <Image className="" src={Logo} alt="Logo" />
        </a>
        <div className=" flex items-center px-4 lg:px-6 xl:px-6">
          {" "}
          <button className="bg-red-600 text grid grid-flow-col text-center  hover:bg-gray-700 text-white font-normal px-2 xl:px-3 md:mr-10 py-2 xl:py-1.5 rounded">
            <Image
              width="20"
              height="20"
              className="mr-1.5 pt-1  "
              src={Icon}
              alt="shopping-cart"
            />
            Store
          </button>
          <a href className="mr-4 text-green-700 lg:mr-6 xl:mr-8">
            <svg
              className="h-6 xl:h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
          </a>
        </div>
      </header>
    </section>
  );
};
