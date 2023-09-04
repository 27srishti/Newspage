import Link from "next/link";
import { useState } from "react";
async function getBlogs() {
  const res = await fetch(
    "https://news.networktigers.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish",
    { Cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return await res.json();
}

async function getCategories(categoryN) {
  const res = await fetch(
    `https://news.networktigers.com/wp-json/wp/v2/categories/${categoryN}`,
    { Cache: "no-store" }
  );
  if (!res.ok) {
    return "Unknown Category";
  }
  const data = await res.json();
  return data.name || "Unknown Category";
}

async function getAuthor(authorId) {
  const res = await fetch(
    `https://news.networktigers.com/wp-json/wp/v2/users/${authorId}`,
    { Cache: "no-store" }
  );
  if (!res.ok) {
    return "Unknown Author";
  }
  const data = await res.json();
  return data.name || "Unknown Author";
}

console.log("posts", getBlogs);
const Blogs = ({ blogPosts, authors, categories }) => {
  const [visible, setVisible] = useState(5);

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5); // Increase the visible count by 5
  };
  return (
    <section className="bg-white overflow-x-hidden md:px-10  md:mt-10 cursor-pointer">
      <div className="container mx-auto">
        <div className="lg:flex ">
          <div className="block lg:flex md:px-2 lg:p-0 mt-1 mb-10">
            <div className="container  mx-auto my-8">
              <div className="w-full">
                {blogPosts.slice(0, visible).map((post, index) => {
                  const authorName = authors[index] || "Unknown Author";
                  const categoryName = categories[index] || "Unknown Category";

                  return (
                    <div
                      key={post.id}
                      className="block rounded w-full lg:flex mb-10"
                      // href={readMore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read more about ${post.title.rendered}`}
                    >
                      <div>
                        <img
                          className="w-full h-80 md:w-full lg:w-[30rem]  mb-5 md:mb-5 lg:mb-0 object-cover md:rounded"
                          src={post.jetpack_featured_media_url}
                          alt={`Image for blog post: ${post.title.rendered}`}
                          layout="responsive"
                        />
                      </div>
                      <div
                        key={post.id}
                        className="bg-white rounded pl-5 lg:pl-5 md:pl-0 flex w-full flex-col justify-evenly leading-normal"
                      >
                        <div>
                          <h2 className="mt-3 lg:mt-0 hover:text-lime-600 text-gray-700 font-bold text-2xl mb-2">
                            {post.title.rendered}
                          </h2>

                          <div className="flex pb-6 pt-1">
                            <div
                              key={post.id}
                              className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white"
                            >
                              {categoryName}
                            </div>
                            <div className="mx-2 text-[0.75rem] text-gray-500 text-center py-1.5 font-medium">
                              {authorName}
                              <span className=" text-gray-400">
                                -{" "}
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="text-gray-500 w-[90%] text-base"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></div>
                        <div className="flex mt-3" aria-label="Read more">
                          <div
                            // href={readMore}
                            className="px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 text-sm md:text-base text-center rounded text-black hover:text-white cursor-pointer bg-lime-600 hover:bg-neutral-700"
                          >
                            <Link href={`/blog/${post.slug}`}>Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {visible < blogPosts.length && (
                  <button
                    className="bg-lime-600 hover:text-white  px-10 py-5 text-center text-[0.75rem] font-semibold  rounded text-white"
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                )}
              </div>
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
                    Derek Walborn -
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
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  try {
    const blogPosts = await getBlogs();
    const authors = await Promise.all(
      blogPosts.map((post) => getAuthor(post.author))
    );
    const categories = await Promise.all(
      blogPosts.map((post) => getCategories(post.categories[1]))
    );

    // Combine the fetched data and pass it as props
    const props = {
      blogPosts,
      authors,
      categories,
    };

    return {
      props,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
export default Blogs;
