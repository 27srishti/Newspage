"use client";
import { useEffect, useState } from "react";

const linksWithUrls = [
  {
    name: "Industry News",
    url: "https://news.networktigers.com/category/industry-news/",
  },
  {
    name: "Network News",
    url: "https://news.networktigers.com/category/network-news/",
  },
  {
    name: "Cybersecurity News",
    url: "https://news.networktigers.com/category/cybersecurity-news/",
  },
  {
    name: "Remote Work",
    url: "https://news.networktigers.com/category/remote-work/",
  },
  {
    name: "NetworkTigers News",
    url: "https://news.networktigers.com/category/networktigers-news/",
  },
  {
    name: "Opinion & Analysis",
    url: "https://news.networktigers.com/category/opinion/",
  },
  { name: "Authors", url: "https://news.networktigers.com/authors/" },
  { name: "Newsletter", url: "https://news.networktigers.com/newsletter/" },
  { name: "About Us", url: "https://news.networktigers.com/about-us/" },
];

const sentences = [
  "Cybersecurity news weekly roundup July 10, 2023",
  "The importance of firewalls in securing your network",
  "Cybersecurity news weekly roundup July 24, 2023",
  "Choosing the right firewall solution",
  "Cybersecurity news weekly roundup July 24, 2023",
];
export const Nav = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isAutoChanging, setIsAutoChanging] = useState(true);

  const goToPreviousSentence = () => {
    setCurrentText((prevIndex) =>
      prevIndex === 0 ? sentences.length - 1 : prevIndex - 1
    );
    setIsAutoChanging(false);
  };

  const goToNextSentence = () => {
    setCurrentText((prevIndex) =>
      prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoChanging(false);
  };

  useEffect(() => {
    let interval;
    if (isAutoChanging) {
      interval = setInterval(goToNextSentence, 1000);
    }

    return () => clearInterval(interval);
  }, [isAutoChanging]);

  useEffect(() => {
    if (!isAutoChanging) {
      const timeout = setTimeout(() => {
        setIsAutoChanging(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [currentText, isAutoChanging]);

  const [menuOpen, setMenuOpen] = useState(true);

  const mobNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section className="shadow-md">
      {/****************************************************** Top **************************************** */}
      <header className="bg-white px-10 hidden -my-1 h-10 md:flex">
        <nav className="block md:visible w-screen">
          <ul className="flex items-center justify-between">
            {/* Properly nested list with list items */}
            <li className="flex items-center">
              <span className="bg-lime-600 px-2 py-1 text-sm text-black font-medium rounded-b">
                TRENDING NOW
              </span>
              <span className="font-[200] mx-5 m-2 text-sm">
                <div
                  className={`transition-transform ease-out duration-100 ${
                    isAutoChanging
                      ? "translate-x-40 opacity-0"
                      : "-translate-x-0 opacity-100"
                  }`}
                >
                  {sentences[currentText]}
                </div>
              </span>
            </li>
            <li className="opacity-50 cursor-pointer flex">
              <button
                className="w-5 h-5 hover:bg-lime-600"
                aria-label="Previous"
              >
                <img
                  onClick={goToPreviousSentence}
                  className=""
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/right-squared--v1.png"
                  alt="right-squared--v1"
                />
              </button>
              <button
                onClick={goToNextSentence}
                className="w-5 h-5 hover:bg-lime-600"
                aria-label="Next"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/left-squared--v1.png"
                  alt="left-squared--v1"
                />
              </button>
            </li>
            <li className="text-xs hover:text-lime-600 cursor-pointer text-gray-500">
              <a
                href="/signin"
                aria-label="Sign in / Join"
                className="text-xs hover:text-lime-600 cursor-pointer text-gray-500"
              >
                Sign in / Join
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/******************************************** middle********************************************* */}

      <header className="bg-white mb-4 grid justify-between px-10  hidden  md:visible md:flex">
        <ul className="flex items-center ">
          <li className="px-1">
            <a
              aria-label="Twitter"
              href="https://twitter.com/networktigers"
              className="inline-block rounded-full  p-2  hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                aria-label="Twitter"
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
          <li className="px-1">
            <a
            aria-label="Facebook"
              href="https://www.facebook.com/networktigers/"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                aria-label="facebook"
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
          <li className="p-1 mr-3">
            <a
             aria-label="LinkedIn"
              href="https://www.linkedin.com/company/networktigers/"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                aria-label="linkedin"
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
          <li className=" md:hidden lg:flex item-center text-xs font-normal  ">
            {" "}
            Wednesday, July 26, 2023 {/* <Date/> */}
          </li>
        </ul>
        <a
          href="https://news.networktigers.com/"
          className=" flex-shrink-0 flex items-center   "
        >
          <img
            className="md:w-80  lg:w-96 2xl:w-full h-10"
            src="images/Logo.avif"
            alt="Logo"
          />
        </a>{" "}
        <div className=" flex items-center ">
          {" "}
          <a
            href="https://www.networktigers.com/"
            className="bg-red-600 text grid grid-flow-col text-center mx-5 md:text-sm hover:bg-gray-700 items-center text-white font-normal md:px-2 xl:px-3  md:py-1 xl:py-1 rounded"
          >
            <img
              className="mr-1 pt-1 w-5 h-7 "
              src="images/icons.avif"
              alt="shopping-cart"
            />
            Store
          </a>{" "}
          <a
           aria-label="search"
            href="https://news.networktigers.com/"
            className=" text-lime-900 flex  cursor-pointer"
          >
            <div className="px-2 text-base font-medium">Search</div>
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
      {/* --------------------------------------------------Bottom---------------------------------------------------------- */}
      <div className="pb-5">
        {/* component */}
        <nav className="relative pt-5  mx-5 items-center bg-white">
          <div className="md:hidden flex justify-between  ">
            <button
              onClick={mobNav}
              className="navbar-burger flex items-center text-neutral-500 "
            >
              <svg
                className="block h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            <a  aria-label="logo" href="https://news.networktigers.com" className="">
              <img
                className="block w-full  h-5  bg-no-repeat bg-center bg-cover "
                src="/images/Logo.avif"
                alt="H1"
              />
            </a>
            <a aria-label="search" href="/" className=" text-neutral-500 flex cursor-pointer ">
              <svg
                className="h-5 items-center xl:h-6"
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
          <ul className="hidden  text-center absolute justify-center top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex lg:mx-auto  md:items-center md:w-full md:space-x-4  xl:space-x-8">
            {linksWithUrls.map((linkObj) => (
              <li key={linkObj.name}>
                <a
                  href={linkObj.url} // Use the URL from the object
                  className="text-xs lg:text-sm font-semibold text-black hover:text-lime-600"
                >
                  {linkObj.name} {/* Use the link name from the object */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={
            menuOpen
              ? "relative z-50 hidden"
              : "fixed transition duration-500  md:invisible z-50 top-0 left-0 bottom-0 flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
          }
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
  <img
    className="block h-full w-48 bg-no-repeat bg-center bg-cover"
    src="/images/Logo.avif"
    alt="H1"
  />
</a>
              <button onClick={mobNav} className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {linksWithUrls.map((linkObj) => (
                  <li key={linkObj.name} className="mb-1">
                    <a
                      href={linkObj.url} // Use the URL from the object
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-lime-50 hover:text-lime-600 rounded"
                    >
                      {linkObj.name} {/* Use the link name from the object */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
