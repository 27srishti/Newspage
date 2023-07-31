// @client
import { useEffect, useState } from "react";
import LoadMoreItems from "../Components/loadMoreItems";

const items = [
  {
    title: "The importance of firewalls in securing your network",
    readMore:
      "https://news.networktigers.com/industry-news/importance-of-firewalls/",
    imageUrl:
      "/images/The importance of firewalls in securing your network.avif",
    category: "Industry News",
    name: "Derek Walborn ",
    date: "July 13, 2023",
    description:
      "NetworkTigers discussed the versatility and importance of firewalls. Despite being one of the oldest cybersecurity tools available, firewalls remain essential components of network protection. At...",
  },
  {
    title: "Cybersecurity news weekly roundup July 17, 2023",
    readMore:
      "https://news.networktigers.com/cybersecurity-news/roundup-july-17-2023/",
    imageUrl: "/images/Cybersecurity news weekly roundup July 17, 2023.avif",
    category: "Cybersecurity News",
    name: " Derek Walborn ",
    date: "uly 17, 2023",
    description:
      "SAN MATEO, CA, July 17, 2023 — Cybersecurity news weekly roundup. Stories, news, politics, and events that impacted the network security industry last week. Brought to you...",
  },
  {
    title: "Understanding the role of switches in networking",
    readMore:
      "https://news.networktigers.com/industry-news/role-of-switches-in-networking/",
    imageUrl: "/images/Understanding the role of switches in networking.avif",
    category: "Industry News",
    name: "Gabrielle West",
    date: "July 15, 2023",
    description:
      "NetworkTigers discusses the role of switches in networking. There are 2.5 quintillion bytes of data generated each day. Moreover, this rate has only increased in...",
  },
  {
    title: "The importance of firewalls in securing your network",
    readMore:
      "https://news.networktigers.com/industry-news/importance-of-firewalls/",
    imageUrl:
      "/images/The importance of firewalls in securing your network.avif",
    category: "Industry News",
    name: "Derek Walborn ",
    date: "July 13, 2023",
    description:
      "NetworkTigers discussed the versatility and importance of firewalls. Despite being one of the oldest cybersecurity tools available, firewalls remain essential components of network protection. At...",
  },
  {
    title: "Cybersecurity news weekly roundup July 10, 2023",
    readMore:
      "https://news.networktigers.com/networktigers-news/roundup-july-10-2023/",
    imageUrl: "/images/Cybersecurity news weekly roundup July 17, 2023.avif",
    category: "Cybersecurity News",
    name: " Derek Walborn",
    date: " July 10, 2023",
    description:
      "SAN MATEO, CA, July 10, 2023 — Cybersecurity news week roundup. Stories, news, politics, and events that impacte the network security industry last week ",
  },
  {
    title: "The importance of firewalls in securing your network",
    readMore:
      "https://news.networktigers.com/industry-news/importance-of-firewalls/",
    imageUrl:
      "/images/The importance of firewalls in securing your network.avif",
    category: "Industry News",
    name: "Derek Walborn ",
    date: "July 13, 2023",
    description:
      "NetworkTigers discussed the versatility and importance of firewalls. Despite being one of the oldest cybersecurity tools available, firewalls remain essential components of network protection. At...",
  },
  {
    title: "Cybersecurity news weekly roundup July 17, 2023",
    readMore:
      "https://news.networktigers.com/cybersecurity-news/roundup-july-17-2023/",
    imageUrl: "/images/Cybersecurity news weekly roundup July 17, 2023.avif",
    category: "Cybersecurity News",
    name: " Derek Walborn ",
    date: "uly 17, 2023",
    description:
      "SAN MATEO, CA, July 17, 2023 — Cybersecurity news weekly roundup. Stories, news, politics, and events that impacted the network security industry last week. Brought to you...",
  },
  {
    title: "Understanding the role of switches in networking",
    readMore:
      "https://news.networktigers.com/industry-news/role-of-switches-in-networking/",
    imageUrl: "/images/Understanding the role of switches in networking.avif",
    category: "Industry News",
    name: "Gabrielle West",
    date: "July 15, 2023",
    description:
      "NetworkTigers discusses the role of switches in networking. There are 2.5 quintillion bytes of data generated each day. Moreover, this rate has only increased in...",
  },
  {
    title: "The importance of firewalls in securing your network",
    readMore:
      "https://news.networktigers.com/industry-news/importance-of-firewalls/",
    imageUrl:
      "/images/The importance of firewalls in securing your network.avif",
    category: "Industry News",
    name: "Derek Walborn ",
    date: "July 13, 2023",
    description:
      "NetworkTigers discussed the versatility and importance of firewalls. Despite being one of the oldest cybersecurity tools available, firewalls remain essential components of network protection. At...",
  },
  {
    title: "Cybersecurity news weekly roundup July 10, 2023",
    readMore:
      "https://news.networktigers.com/networktigers-news/roundup-july-10-2023/",
    imageUrl: "/images/Cybersecurity news weekly roundup July 17, 2023.avif",
    category: "Cybersecurity News",
    name: " Derek Walborn",
    date: " July 10, 2023",
    description:
      "SAN MATEO, CA, July 10, 2023 — Cybersecurity news week roundup. Stories, news, politics, and events that impacte the network security industry last week ",
  },
  // Add more News here...
];

export const Body = () => {
  return (
    <section className="bg-white overflow-x-hidden md:px-10 mt-56 md:mt-10 cursor-pointer">
      <div className="container mx-auto">
        <div className="lg:flex">
          <div className="block lg:flex md:px-2 lg:p-0 mt-1 mb-10">
            <div className="container mx-auto my-8">
              <LoadMoreItems items={items} />{" "}
              {/* Pass the items array as a prop */}
            </div>

            {/* ***********************************right sidebar ************************************************* */}
          </div>

          <div className="mt-8 xl:w-2/4 lg:mt-0 px-5 ">
            <div className=" bg-lime-600 w-40 px-2 font-bold py-1.5 text-center text-sm text-black">
              Whats Popular ?
            </div>
            <hr className=" mb-3 border-[0.15rem] border-lime-600" />
            <div>
              <a
                href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Could the Kronos hack have been prevented?
              </a>
              <div className="flex pb-6  pt-2">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Opinion & Analysis
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Derek Walborn -{" "}
                  <span className="font-light">December 23, 2021</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/industry-news/are-you-ready-for-the-great-supply-chain-crash-of-2020/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Are you ready for the great supply chain crash of 2020?
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Industry News
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Ed Cape - <span className="font-light">June 19, 2020</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/featured/laymans-guide-network-stack/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                A Layman’s Guide to Networking: The Network Stack
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Featured
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Staff Reporter -{" "}
                  <span className="font-light"> July 29, 2021</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/industry-news/fraud-delivers-price-war-as-counterfeiters-think-inside-the-box/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Reboxing counterfeiters deliver price war as they think inside
                the box
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Industry News
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Will Rankin -{" "}
                  <span className="font-light">July 10, 2020</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/opinion/what-was-learned-from-the-2014-sony-pictures-hack/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                What was learned from the 2014 Sony Pictures hack?
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Opinion & Analysis
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Feba Maryann -{" "}
                  <span className="font-light"> May 15, 2021</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/featured/network-switch-configuration-top-tips-and-practices/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Network switch configuration top tips and practices
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Featured
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Maclean -{" "}
                  <span className="font-light">September 25, 2021</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/featured/who-is-the-lapsus-group-ransomware-gang/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Who is the Lapsus$ Group ransomware gang?
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Featured
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Derek Walborn -{" "}
                  <span className="font-light">March 17, 2022</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/network-news/hello-please-dont-hang-up-time-to-cut-the-line-on-robocallers/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                “Hello! Please don’t hang up!” Time to cut the line on
                robocallers
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Network News
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Will Rankin -{" "}
                  <span className="font-light"> August 17, 2020</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/industry-news/modular-switches-advantages-and-disadvantages/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Modular switches: advantages and disadvantages
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  Industry News
                </div>
                <div className="mx-2 text-[0.75rem] text-left py-1.5 font-medium">
                  Mike Syiek -{" "}
                  <span className="font-light"> February 13, 2021</span>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <div>
              <a
                href="https://news.networktigers.com/networktigers-news/stackable-switches-to-stack-or-not-to-stack/"
                className="hover:text-lime-600 text-gray-700 font-bold text-lg  capitalize"
              >
                Stackable switches: to stack or not to stack?
              </a>
              <div className="flex pb-6  pt-2 ">
                <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                  NetworkTigers News
                </div>
                <div className="mx-2 text-[0.75rem]  text-left py-1.5 font-medium">
                  Mike Syiek -{" "}
                  <span className="font-light">February 20, 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
