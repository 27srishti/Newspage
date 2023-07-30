import React from "react";

export const Bottom = () => {
  return (
    <section className="px-5 md:px-10 py-10 mx-auto overflow-x-hidden font-poppins bg-gray-200">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-12">
        {/* ----------------------------1st column ----------------------------------------- */}
        <div className="flex flex-col justify-evenly xl:col-span-3 md:col-span-4 col-span-12 py-2 space-y-8  ">
          <div className="flex flex-col space-y-10 md:space-y-2">
            <div className="flex flex-col  md:w-auto md:space-y-1 space-y-5">
              <div className=" pt-8 ">
                <div className="relative flex items-center  mb-3 text-gray-600 font-medium hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
                  <div className="relative ">
                    <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white bg-red-700 rounded">
                      <span className="inline-block text-sm text-center  md:text-xs xl:text-sm leading-tight">
                        Featured Article
                      </span>
                      <span
                        className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-red-700"
                        style={{ left: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <a
                rel="noopener noreferrer"
                href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
                className="font-poppins text-xl hover:text-blue-400 md:pb-5 md:text-xl xl:text-2xl font-semibold "
              >
                Homes Of The Future, With Mike Syiek Of NetworkTigers.
              </a>
              <p className="text-[0.90rem] mb-10  md:text-sm md:pb-5 text-gray-600 hover:text-blue-400 ">
                Smart Homes are already here, but in their infancy. The
                improvement of materials and process has certainly increased
                efficiencies...
              </p>
              <div
                href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
                className=" px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 text-sm md:text-base  text-center rounded text-white hover:bg-lime-600 bg-neutral-700"
              >
                Read More
              </div>
            </div>
          </div>

          <div className="grid grid-col w-full space-y-2">
          <a rel="noopener noreferrer" href="#" className="grid w-full">
  <img
    className="w-auto h-8 my-5"
    src="/images/Logo.avif"
    alt="Logo"
  />
  <span className="text-[0.90rem] text-gray-600 hover:text-blue-400">
    NetworkTigers, Inc.
  </span>
  <span className="text-[0.90rem] text-gray-600 hover:text-blue-400 mb-2">
    1029 S. Claremont St. San Mateo, CA 94402
  </span>
</a>

            <ul className="flex items-center  lg:mr-6 xl:mr-8">
              <li className="p-1">
                <a
                  aria-label="Twitter"
                  href="https://twitter.com/networktigers"
                  className="inline-block rounded-full  p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
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
              <li className="p-1">
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
              <li className="p-1">
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
            </ul>
          </div>
        </div>
        {/* ----------------------------2nd column ----------------------------------------- */}
        <div className="hidden pt-10 xl:col-span-3 md:col-span-4 md:block lg:block">
          <div className="relative flex items-center mb-3 text-gray-600 hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
            <div className="relative">
              <div className="absolute bottom-0 text-center inline-block w-36 xl:w-36 px-4 py-2 font-medium text-white bg-neutral-500 rounded">
                <span className="inline-block text-sm text-center leading-tight">
                  Editor Picks
                </span>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 -mb-1 transform rotate-45 bg-neutral-500"
                  style={{ left: "50%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-gray-300">
            <div className="flex py-4 space-x-2">
              <a href="https://news.networktigers.com/opinion/fbi-cybersecurity-noteworthy-wins-and-losses/">
                <img
                  className="md:hidden lg:block object-cover rounded w-26 h-16"
                  src="/images/FBI cybersecurity noteworthy wins and losses.avif"
                  alt="FBI cybersecurity noteworthy wins and losses"
                  width={104} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/opinion/fbi-cybersecurity-noteworthy-wins-and-losses/"
                  className="font-poppins hover:underline"
                >
                  FBI cybersecurity noteworthy wins and losses
                </a>
                <p className="mt-auto text-xs text-gray-600">May 13, 2023</p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="https://news.networktigers.com/opinion/ransomware-attacks-on-schools-are-surging/">
                <img
                  className="md:hidden lg:block object-cover rounded w-26 h-16"
                  src="/images/Ransomware attacks on schools are surging.avif"
                  alt="Ransomware attacks on schools are surging"
                  width={104} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/opinion/ransomware-attacks-on-schools-are-surging/"
                  className="font-poppins hover:underline"
                >
                  Ransomware attacks on schools are surging
                </a>
                <p className="mt-auto text-xs text-gray-600">May 4, 2023</p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="https://news.networktigers.com/opinion/what-are-pig-butchering-scams/">
                <img
                  className="md:hidden lg:block object-cover rounded w-[4.5rem] xl:w-20 h-16"
                  src="/images/What are pig butchering scams.avif"
                  alt="What are pig butchering scams?"
                  width={72} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/opinion/what-are-pig-butchering-scams/"
                  className="font-poppins hover:underline"
                >
                  What are pig butchering scams?
                </a>
                <p className="mt-auto text-xs text-gray-600">April 29, 2023</p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="https://news.networktigers.com/opinion/understanding-access-point-options-mimo-vs-mu-mimo/">
                <img
                  className="md:hidden lg:block object-cover rounded w-26 h-16"
                  src="/images/Understanding Access Point options.avif"
                  alt="Understanding Access Point options: MIMO vs. MU-MIMO"
                  width={104} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/opinion/understanding-access-point-options-mimo-vs-mu-mimo/"
                  className="font-poppins hover:underline"
                >
                  Understanding Access Point options: MIMO vs. MU-MIMO
                </a>
                <p className="mt-auto text-xs text-gray-600">April 20, 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------3nd column ----------------------------------------- */}
        <div className="hidden pt-10 xl:col-span-3 md:col-span-4 md:block lg:block">
          <div className="relative flex items-center  mb-3 text-gray-600 hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
            <div className="relative ">
              <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white font-medium bg-blue-900 rounded">
                <span className="inline-block text-sm text-center leading-tight">
                  Latest News
                </span>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-blue-900"
                  style={{ left: "50%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-gray-300">
            <div className="flex py-4 space-x-2">
              <a href="/">
                <img
                  className=" md:hidden lg:block object-cover rounded w-26 h-16"
                  src="/images/Maximizing ROI on network equipment.avif"
                  alt="LN1"
                  width={72} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>

              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/industry-news/maximizing-roi-on-network-equipment/"
                  className="font-poppins hover:underline"
                >
                  Maximizing ROI on network equipment
                </a>
                <p className="mt-auto text-xs text-gray-600">July 20, 2023</p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="/">
                <img
                  className=" md:hidden lg:block object-cover rounded w-26 h-16"
                  src="/images/Cybersecurity news weekly roundup July 17, 2023.avif"
                  alt="LN2"
                  width={72} // Replace with the actual width of the image in pixels
                  height={64} // Replace with the actual height of the image in pixels
                />
              </a>

              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/cybersecurity-news/roundup-july-17-2023/"
                  className="font-poppins hover:underline"
                >
                  Cybersecurity news weekly roundup July 17, 2023
                </a>
                <p className="mt-auto text-xs text-gray-600">July 17, 2023</p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="/">
                <img
                  className=" md:hidden lg:block object-cover rounded w-32 h-16"
                  src="/images/Understanding the role of switches in networking.avif"
                  alt="LN3"
                />
              </a>

              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/industry-news/role-of-switches-in-networking/"
                  className="font-poppins hover:underline"
                >
                  Understanding the role of switches in networking
                </a>
                <p className="mt-auto text-xs  . text-gray-600">
                  July 15, 2023
                </p>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
              <a href="/">
                <img
                  className=" md:hidden lg:block object-cover rounded w-36 h-16"
                  src="/images/The importance of firewalls in securing your network.avif"
                  alt="LN4"
                />
              </a>

              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/industry-news/importance-of-firewalls/"
                  className="font-poppins hover:underline"
                >
                  The importance of firewalls in securing your network
                </a>
                <p className="mt-auto text-xs text-gray-600">July 13, 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------4th column ----------------------------------------- */}
        <div className="py-5 pb-2 xl:col-span-3 md:col-span-12 col-span-12 lg:block">
          <div>
            <div className="pt-5 pb-3">
              <div className="relative flex items-center mb-3 text-gray-600 hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
                <div className="relative">
                  <div className="absolute bottom-0 text-center inline-block w-40 xl:w-40 py-2 text-white font-medium bg-orange-700 rounded">
                    <span className="inline-block text-sm text-center leading-tight">
                      Popular Categories
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-3 h-3 -mb-1 transform rotate-45 bg-orange-700"
                      style={{ left: "50%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li className="px-1  transition duration-300">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/all-articles/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    All Articles
                    <span
                      href="https://news.networktigers.com/category/all-articles/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      563
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>
              <li className="px-1   transition duration-300">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/industry-news/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    Industry News
                    <span
                      href="https://news.networktigers.com/category/industry-news/"
                      className="text-gray-600 hover:text-blue-400 ml-auto "
                    >
                      355
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>
              <li className="px-1 ">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/opinion/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    Opinion & Analysis
                    <span
                      href="https://news.networktigers.com/category/opinion/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      278
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>
              <li className="px-1 ">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/cybersecurity-news/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    Cybersecurity News
                    <span
                      href="https://news.networktigers.com/category/cybersecurity-news/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      191
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>
              <li className="px-1 ">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/networktigers-news/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    NetworkTigers News
                    <span
                      href="https://news.networktigers.com/category/networktigers-news/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      135
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>{" "}
              <li className="px-1 ">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/network-news/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    Network News
                    <span
                      href="https://news.networktigers.com/category/network-news/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      100
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>{" "}
              <li className="px-1 ">
                <div className="tap-target-wrapper">
                  <a
                    href="https://news.networktigers.com/category/remote-work/"
                    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    Remote Work
                    <span
                      href="https://news.networktigers.com/category/remote-work/"
                      className="text-gray-600 hover:text-blue-400 ml-auto"
                    >
                      61
                    </span>
                    <i className="text-gray-600 hover:text-blue-400 bx bx-right-arrow-alt ml-1" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
