import React from "react";
import { useState, useEffect } from "react";
async function getFeaturedCategory() {
  try {
    const response = await fetch(
      "https://news.networktigers.com/wp-json/wp/v2/categories"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const categories = await response.json();

    // Find the featured category by checking its name
    const featuredCategory = categories.find(
      (category) => category.name === "Featured"
    );

    return featuredCategory;
  } catch (error) {
    console.error("Error fetching featured category:", error);
    return null;
  }
}

async function getFeaturedBlogPost(categoryId) {
  try {
    const response = await fetch(
      `https://news.networktigers.com/wp-json/wp/v2/posts?_embed&categories=${categoryId}&order=desc&per_page=1&status=publish`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch featured blog post");
    }

    const posts = await response.json();

    if (posts.length > 0) {
      return posts[0]; // Return the first blog post in the category
    } else {
      return null; // No posts found in the category
    }
  } catch (error) {
    console.error("Error fetching featured blog post:", error);
    return null;
  }
}
function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  } else {
    return text;
  }
}

async function getRecentBlogPosts() {
  try {
    const response = await fetch(
      "https://news.networktigers.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=4&status=publish"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recent blog posts");
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    return [];
  }
}
async function getArticlesCount() {
  try {
    const response = await fetch(
      `https://news.networktigers.com/wp-json/wp/v2/categories?_embed&per_page=8 `
    );

    if (!response.ok) {
      throw new Error("Failed to fetch featured articles");
    }

    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error("Error fetching featured articles:", error);
    return [];
  }
}
const Bottom = ({ featuredPost, recentPosts }) => {
  const [articlesCount, setArticlesCount] = useState([]);

  useEffect(() => {
    getArticlesCount().then((articles) => {
      setArticlesCount(articles);
    });
  }, []);
  return (
    <section className="px-5 md:px-10 py-10 mx-auto overflow-x-hidden font-poppins bg-gray-200">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-12">
        {/* ----------------------------------------------------------------------------1st-------------------------------------------------------------------------------------------------------------------- */}
        <div className="flex flex-col justify-evenly xl:col-span-3 md:col-span-4 col-span-12 py-2 space-y-8  ">
          <div className="flex flex-col space-y-10 md:space-y-2">
            <div className="flex flex-col  md:w-auto md:space-y-1 space-y-5">
              <div className=" pt-8 ">
                <div className="relative flex items-center  mb-3 text-gray-600 font-medium  cursor-pointer  hover:text-blue-500">
                  <div className="relative ">
                    <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white bg-red-700 rounded">
                      <span className="inline-block text-sm text-center  md:text-xs xl:text-sm leading-tight">
                        Featured Article
                      </span>{" "}
                      <span
                        className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-red-700"
                        style={{ left: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {featuredPost ? (
                <div>
                  <div
                    rel="noopener noreferrer"
                    href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
                    className="font-poppins text-xl hover:text-blue-400 md:pb-5 md:text-xl xl:text-2xl font-semibold "
                  >
                    {featuredPost.title.rendered}
                  </div>
                  <div
                    className="text-[0.90rem] mb-3  md:text-sm md:pb-5 text-gray-600 hover:text-blue-400"
                    dangerouslySetInnerHTML={{
                      __html: truncateText(featuredPost.excerpt.rendered, 20),
                    }}
                  ></div>
                </div>
              ) : (
                <div>No featured blog post found in this category.</div>
              )}{" "}
              <div
                href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
                className=" px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 cursor-pointer text-sm md:text-base  text-center rounded text-white hover:bg-lime-600 bg-neutral-700"
              >
                Read More
              </div>
            </div>
          </div>

          <div className="grid grid-col w-full space-y-2">
            <a rel="noopener noreferrer" href="#" className="grid w-full">
              <img
                src="/images/Logo.avif"
                width="full"
                height="full"
                alt="logo"
                layout="responsive"
                loading="lazy"
              ></img>
              <span className="text-[0.90rem] mt-5 text-gray-600 hover:text-blue-400">
                NetworkTigers, Inc.
              </span>
              <span className="text-[0.90rem] text-gray-600 hover:text-blue-400 mb-2">
                1029 S. Claremont St. San Mateo, CA 94402
              </span>
            </a>

            <ul className="flex items-center  lg:mr-6 xl:mr-8">
              <div className="p-1">
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
              </div>
              <div className="p-1">
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
              </div>
              <div className="p-1">
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
              </div>
            </ul>
          </div>
        </div>{" "}
        {/* ----------------------------------------------------------------------------2nd-------------------------------------------------------------------------------------------------------------------- */}
        <div className="hidden pt-10 xl:col-span-3 md:col-span-4 md:block lg:block">
          <div className="relative flex items-center  mb-3 text-gray-600 hover:text-blue-400 cursor-pointer  ">
            <div className="relative ">
              <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white font-medium bg-gray-700 rounded">
                <span className="inline-block text-sm text-center leading-tight">
                Editors pick
                </span>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-gray-700"
                  style={{ left: "50%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex py-3 space-x-2">
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/industry-news/maximizing-roi-on-network-equipment/"
                  className="font-poppins hover:underline"
                >
                  Maximizing ROI on network equipment
                </a>
                <div className="mt-auto text-xs text-gray-600">July 20, 2023</div>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
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
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="https://news.networktigers.com/industry-news/role-of-switches-in-networking/"
                  className="font-poppins hover:underline"
                >
                  Understanding the role of switches in networking
                </a>
                <div className="mt-auto text-xs  . text-gray-600">
                  July 15, 2023
                </div>
              </div>
            </div>
            <div className="flex py-4 space-x-2">
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
        </div>{" "}
        {/* -------------------------------------------------------------------3rd--------------------------------------------------------------------------------------- */}
        <div className="hidden pt-10 xl:col-span-3  md:col-span-4 md:block lg:block">
          <div className="relative flex items-center  mb-3 text-gray-600  cursor-pointer  hover:text-blue-500">
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

          <div className="flex flex-col divide-y  divide-gray-300">
            <div className="flex py-4 space-x-2">
              <div className="flex flex-col  flex-grow">
                {recentPosts.map((post) => ( 
                  <div
                    rel="noopener noreferrer"
                    href="https://news.networktigers.com/industry-news/maximizing-roi-on-network-equipment/"
                    className="font-poppins text-base   hover:underline"
                    key={post.id}
                  >
                    {post.title.rendered}

                    <div className="mt-auto text-xs text-gray-600">
                    
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric", 
                      })}   <div className="  pb-7  "/>
                    </div>
                  </div>
                
                ))}
             
              </div>
            </div>
        
          </div>
        </div>
        {/* ----------------------------------------------------------------------------4th-------------------------------------------------------------------------------------------------------------------- */}
        <div className="py-5  pb-2 xl:col-span-3 md:col-span-12 col-span-12 lg:block">
          <div>
            <div className="pt-5 pb-3">
              <div className="relative flex items-center   text-gray-600  cursor-pointer  hover:text-blue-500">
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
              <div className="px-1  transition duration-300">
                <div className="tap-target-wrapper">
                  {articlesCount.map((article) => (
                    <div key={article.id}>
                      <a href={`/blog/${article.slug}`}>
                        <h3
                          href="https://news.networktigers.com/category/all-articles/"
                          className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer p-3 rounded-lg"
                          style={{ minWidth: "48px" }}
                        >
                          {article.name}

                          <span
                            href="https://news.networktigers.com/category/all-articles/"
                            className="text-black  hover:text-blue-400 ml-auto"
                          >
                            {" "}
                            {article.count}
                          </span>
                        </h3>
                      </a>
                    </div>
                  ))}{" "}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const featuredCategory = await getFeaturedCategory();

  if (featuredCategory) {
    const featuredPost = await getFeaturedBlogPost(featuredCategory.id);
    const recentPosts = await getRecentBlogPosts();
    return {
      props: {
        category: featuredCategory,
        featuredPost,
        recentPosts,
      },
    };
  } else {
    return {
      props: {
        category: null,
        featuredPost: null,
      },
    };
  }
}
export default Bottom;
