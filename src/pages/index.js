import Hero from "../Components/Hero";
import Body from "../Components/Body";
import Nav from "../Components/Nav";
import {
  fetchBlogPosts,
 
  fetchCategories,
  fetchFeaturedCategory,
  fetchAuthor,
} from "@/Components/api";
import Bottom from "../Components/Bottom";
import Footer from "@/Components/Footer";

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
async function getRecentBlogPosts() {
  try {
    const response = await fetch(
      "https://staging-de34-newsnetworktigers.wpcomstaging.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=4&status=publish"
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
function index({
  heroProps,
  blogProps,
  navProps,
  category,
  featuredPost,
  recentPosts,
}) {
  return (
    <div>
      <Nav {...navProps} />
      <Hero {...heroProps} />
      <Body {...blogProps} />
      <Bottom
        category={category}
        featuredPost={featuredPost}
        recentPosts={recentPosts}
      />{" "}
      {/* Render the Bottom component with its props */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const navPosts = await fetchBlogPosts();
    const initialSentences = navPosts
      .slice(0, 5)
      .map((post) => post.title.rendered);

    const heroData = await fetchBlogPosts();

    const blogData = await fetchBlogPosts();
    const featuredCategory = await fetchFeaturedCategory();
    console.log("Featured Category:", featuredCategory);
    
    let featuredPost = null;
    let recentPosts = [];
    
    if (featuredCategory) {
      featuredPost = await getFeaturedBlogPost(featuredCategory.id);
      recentPosts = await getRecentBlogPosts();
    }
    return {
      props: {
        heroProps: {
          recentBlogs: heroData,
          recentAuthors: [],
          recenCatogory: [],
        },
        blogProps: {
          blogPosts: blogData,
          authors: [],
          categories: [],
        },
        navProps: {
          sentences: initialSentences,
        },
        category: featuredCategory || null, // Pass category prop
        featuredPost, // Pass featuredPost prop
        recentPosts, // Pass recentPosts prop
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

export default index;

//--------------------------------------------------------------------------------------------------------------------------------

//hero
// import Link from "next/link";

// async function getBlogs() {
//   const res = await fetch(
//     "https://news.networktigers.com/wp-json/wp/v2/posts",
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch blogs");
//   }
//   return await res.json();
// }

// async function getCategories(categoryN) {
//   const res = await fetch(
//     `https://news.networktigers.com/wp-json/wp/v2/categories/${categoryN}`,
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     return "Unknown Category";
//   }
//   const data = await res.json();
//   return data.name || "Unknown Category";
// }

// async function getAuthor(authorId) {
//   const res = await fetch(
//     `https://news.networktigers.com/wp-json/wp/v2/users/${authorId}`,
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     return "Unknown Author";
//   }
//   const data = await res.json();
//   return data.name || "Unknown Author";
// }

// const index = ({ recentBlogs, recentAuthors, recenCatogory }) => {
//   return (
//     <div className="container  justify-center mt-2 md:mt-5 flex row-span-1 gap-1  mx-auto w-full">
//        <div className="aspect-auto lg:mx-10 2xl:mx-0 w-auto">
//       {recentBlogs.slice(0, 1).map((posts, index) => {
//         const authorName = recentAuthors[index] || "Unknown Author";
//         const categoryName = recenCatogory[index] || "Unknown Category";
//         return (
//           <a
//             href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
//             className="relative "
//             key={posts.id}
//           >
//             <img
//              className="block w-full h-[15rem]  md:w-[80rem] lg:w-[200rem]  lg:h-[30rem] object-cover object-center"
//               src={posts.jetpack_featured_media_url}
//               alt={`Image for blog post: ${posts.title.rendered}`}
//               layout="responsive"
//             />
//            <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5 "></div>
//               <div className="absolute bottom-1 px-5">
//                 <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
//                   {categoryName}
//                 </div>

//               <div
//                 href="/"
//                 className="text-gray-100 font-bold text-sm md:text-xl capitalize"
//               >
//                 {posts.title.rendered}
//               </div>

//               <div className="flex pb-3">
//                 <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
//                   {authorName} -{" "}
//                   <span className="font-light">
//                     {new Date(posts?.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         );
//       })}
//       <div className="flex mt-1 gap-1">
//         {recentBlogs.slice(1, 2).map((posts, index) => {
//           const authorName = recentAuthors[index] || "Unknown Author";
//           const categoryName = recenCatogory[index] || "Unknown Category";
//           return (
//             <div className="w-full" key={posts.id}>
//               <a
//                 href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
//                 className="relative"
//               >
//                 <img
//                   className="block w-full h-48 md:h-[15rem] object-cover object-center"
//                   src={posts.jetpack_featured_media_url}
//                   alt={`Image for blog post: ${posts.title.rendered}`}
//                   layout="responsive"
//                 />
//                 <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
//                 <div className="absolute bottom-1 px-5">
//                 <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
//                       {categoryName}
//                     </div>
//                   <div
//                     href="/"
//                     className="text-gray-100 font-bold text-sm md:text-xl capitalize"
//                   >
//                     {posts.title.rendered}
//                   </div>
//                   <div className="flex pb-3">
//                     <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
//                       {authorName} -{" "}
//                       <span className="font-light">
//                         {new Date(posts?.date).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//         {recentBlogs.slice(2, 3).map((posts, index) => {
//           const authorName = recentAuthors[index] || "Unknown Author";
//           const categoryName = recenCatogory[index] || "Unknown Category";
//           return (
//             <div className="w-full" key={posts.id}>
//               <a
//                 href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
//                 className="relative"
//               >
//                 <img
//                   className="block w-full md:h-[15rem] h-48 object-cover object-center"
//                   src={posts.jetpack_featured_media_url}
//                   alt={`Image for blog post: ${posts.title.rendered}`}
//                   layout="responsive"
//                 />
//                 <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
//                 <div className="absolute bottom-1 px-5">
//                   <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
//                     {categoryName}
//                   </div>
//                   <div
//                     href="/"
//                     className="text-gray-100 font-bold text-sm md:text-xl capitalize"
//                   >
//                     {posts.title.rendered}
//                   </div>
//                   <div className="flex pb-3">
//                     <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
//                       {authorName}-{" "}
//                       <span className="font-light">
//                         {new Date(posts?.date).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//       </div></div>
//     </div>
//   );
// };
// export const getServerSideProps = async () => {
//   try {
//     const recentBlogs = await getBlogs();
//     const recentAuthors = await Promise.all(
//       recentBlogs.map((post) => getAuthor(post.author))
//     );
//     const recenCatogory = await Promise.all(
//       recentBlogs.map((post) => getCategories(post.categories[1]))
//     );

//     return {
//       props: {
//         recentBlogs,
//         recentAuthors,
//         recenCatogory,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       notFound: true,
//     };
//   }
// };

// export default index;
// -------------------------------
//body
// import Link from "next/link";
// import { useState } from "react";
// async function getBlogs() {
//   const res = await fetch(
//     "https://news.networktigers.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish",
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch blogs");
//   }
//   return await res.json();
// }

// async function getCategories(categoryN) {
//   const res = await fetch(
//     `https://news.networktigers.com/wp-json/wp/v2/categories/${categoryN}`,
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     return "Unknown Category";
//   }
//   const data = await res.json();
//   return data.name || "Unknown Category";
// }

// async function getAuthor(authorId) {
//   const res = await fetch(
//     `https://news.networktigers.com/wp-json/wp/v2/users/${authorId}`,
//     { Cache: "no-store" }
//   );
//   if (!res.ok) {
//     return "Unknown Author";
//   }
//   const data = await res.json();
//   return data.name || "Unknown Author";
// }

// console.log("posts", getBlogs);
// const index = ({ blogPosts, authors, categories }) => {
//   const [visible, setVisible] = useState(5);

//   const loadMore = () => {
//     setVisible((prevVisible) => prevVisible + 5); // Increase the visible count by 5
//   };
//   return (
//     <div className="w-full">
//       {blogPosts.slice(0, visible).map((post, index) => {
//         const authorName = authors[index] || "Unknown Author";
//         const categoryName = categories[index] || "Unknown Category";

//         return (
//           <div
//             key={post.id}
//             className="block rounded w-full lg:flex mb-10"
//             // href={readMore}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={`Read more about ${post.title.rendered}`}
//           >
//             <div>
//               <img
//                 className="w-full h-80 md:w-full lg:w-[30rem]  mb-5 md:mb-5 lg:mb-0 object-cover md:rounded"
//                 src={post.jetpack_featured_media_url}
//                 alt={`Image for blog post: ${post.title.rendered}`}
//                 layout="responsive"
//               />
//             </div>
//             <div
//               key={post.id}
//               className="bg-white rounded pl-5 lg:pl-5 md:pl-0 flex w-full flex-col justify-evenly leading-normal"
//             >
//               <div>
//                 <h2 className="mt-3 lg:mt-0 hover:text-lime-600 text-gray-700 font-bold text-2xl mb-2">
//                   {post.title.rendered}
//                 </h2>

//                 <div className="flex pb-6 pt-1">
//                   <div
//                     key={post.id}
//                     className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white"
//                   >
//                     {categoryName}
//                   </div>
//                   <div className="mx-2 text-[0.75rem] text-gray-500 text-center py-1.5 font-medium">
//                     {authorName}
//                     <span className=" text-gray-400">
//                       -{" "}
//                       {new Date(post.date).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="text-gray-500 w-[90%] text-base"
//                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
//               ></div>
//               <div className="flex mt-3" aria-label="Read more">
//                 <div
//                   // href={readMore}
//                   className="px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 text-sm md:text-base text-center rounded text-black hover:text-white cursor-pointer bg-lime-600 hover:bg-neutral-700"
//                 >
//                   <Link href={`/blog/${post.slug}`}>Read More</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//      {visible < blogPosts.length && (
//         <button
//           className="bg-lime-600 hover:text-white  px-10 py-5 text-center text-[0.75rem] font-semibold  rounded text-white"
//           onClick={loadMore}
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   try {
//     const blogPosts = await getBlogs();
//     const authors = await Promise.all(
//       blogPosts.map((post) => getAuthor(post.author))
//     );
//     const categories = await Promise.all(
//       blogPosts.map((post) => getCategories(post.categories[1]))
//     );

//     // Combine the fetched data and pass it as props
//     const props = {
//       blogPosts,
//       authors,
//       categories,
//     };

//     return {
//       props,
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       notFound: true,
//     };
//   }
// };
// export default index;
//----------------------------------------------------------------
//Popular Categories

// import React, { useEffect, useState } from "react";

// async function getArticlesCount() {
//   try {
//     const response = await fetch(
//       `https://staging-de34-newsnetworktigers.wpcomstaging.com/wp-json/wp/v2/categories?_embed&per_page=8 `
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch featured articles");
//     }

//     const articles = await response.json();
//     return articles;
//   } catch (error) {
//     console.error("Error fetching featured articles:", error);
//     return [];
//   }
// }

// const Articles = () => {
//   const [articlesCount, setArticlesCount] = useState([]);

//   useEffect(() => {
//     getArticlesCount().then((articles) => {
//       setArticlesCount(articles);
//     });
//   }, []);

//   return (
//     <div className="py-5 bg-white pb-2 xl:col-span-3 md:col-span-12 col-span-12 lg:block">
//       <div>
//         <div className="pt-5 pb-3">
//           <div className="relative flex items-center mb-3  text-gray-600  cursor-pointer  hover:text-blue-500">
//             <div className="relative">
//               <div className="absolute bottom-0 text-center inline-block w-40 xl:w-40 py-2 text-white font-medium bg-orange-700 rounded">
//                 <span className="inline-block text-sm text-center leading-tight">
//                   Popular Categories
//                 </span>
//                 <span
//                   className="absolute bottom-0 right-0 w-3 h-3 -mb-1 transform rotate-45 bg-orange-700"
//                   style={{ left: "50%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul>
//           <li className="px-1 bg-white transition duration-300">
//             <div className="tap-target-wrapper">
//               {articlesCount.map((article) => (
//                 <li key={article.id}>
//                   <a href={`/blog/${article.slug}`}>
//                     <h3
//                       href="https://news.networktigers.com/category/all-articles/"
//                       className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer p-3 rounded-lg"
//                       style={{ minWidth: "48px" }}
//                     >
//                       {article.name}

//                       <span
//                         href="https://news.networktigers.com/category/all-articles/"
//                         className="text-black bg-white hover:text-blue-400 ml-auto"
//                       >
//                         {" "}
//                         {article.count}
//                       </span>
//                     </h3>
//                   </a>
//                 </li>
//               ))}{" "}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Articles;
//-------------------------------------------------------------------------------------------------------------------------------------
// latest news

// import React from "react";

// async function getRecentBlogPosts() {
//   try {
//     const response = await fetch(
//       "https://staging-de34-newsnetworktigers.wpcomstaging.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=4&status=publish"
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch recent blog posts");
//     }

//     const posts = await response.json();
//     return posts;
//   } catch (error) {
//     console.error("Error fetching recent blog posts:", error);
//     return [];
//   }
// }

// const RecentBlogPosts = ({ recentPosts }) => {
//   return (
// <div className="hidden pt-10 xl:col-span-3  md:col-span-4 md:block lg:block">
//   <div className="relative flex items-center  mb-3 text-gray-600 hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
//     <div className="relative ">
//       <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white font-medium bg-blue-900 rounded">
//         <span className="inline-block text-sm text-center leading-tight">
//           Latest News
//         </span>
//         <span
//           className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-blue-900"
//           style={{ left: "50%" }}
//         />
//       </div>
//     </div>
//   </div>

//   <div className="flex flex-col divide-y divide-gray-300">
//     <div className="flex py-4 space-x-2">
//       <div className="flex flex-col flex-grow">
//         {recentPosts.map((post) => (
//           <li
//             rel="noopener noreferrer"
//             href="https://news.networktigers.com/industry-news/maximizing-roi-on-network-equipment/"
//             className="font-poppins hover:underline"
//             key={post.id}
//           >
//             {post.title.rendered}

//             <p className="mt-auto text-xs text-gray-600">
//               Date:{" "}
//               {new Date(post.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//           </li>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export async function getServerSideProps() {
//   const recentPosts = await getRecentBlogPosts();

//   return {
//     props: {
//       recentPosts,
//     },
//   };
// }

// export default RecentBlogPosts;
//-------------------------------------------------------------------------------------------------------------------
//featured article

// import React from "react";

// async function getFeaturedCategory() {
//   try {
//     const response = await fetch(
//       "https://news.networktigers.com/wp-json/wp/v2/categories"
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch categories");
//     }

//     const categories = await response.json();

//     // Find the featured category by checking its name
//     const featuredCategory = categories.find(
//       (category) => category.name === "Featured"
//     );

//     return featuredCategory;
//   } catch (error) {
//     console.error("Error fetching featured category:", error);
//     return null;
//   }
// }

// async function getFeaturedBlogPost(categoryId) {
//   try {
//     const response = await fetch(
//       `https://news.networktigers.com/wp-json/wp/v2/posts?_embed&categories=${categoryId}&order=desc&per_page=1&status=publish`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch featured blog post");
//     }

//     const posts = await response.json();

//     if (posts.length > 0) {
//       return posts[0]; // Return the first blog post in the category
//     } else {
//       return null; // No posts found in the category
//     }
//   } catch (error) {
//     console.error("Error fetching featured blog post:", error);
//     return null;
//   }
// }
// function truncateText(text, maxWords) {
//   const words = text.split(" ");
//   if (words.length > maxWords) {
//     return words.slice(0, maxWords).join(" ") + "...";
//   } else {
//     return text;
//   }
// }
// const FeaturedCategory = ({ category, featuredPost }) => {
//   return (
//     <div className="flex flex-col justify-evenly xl:col-span-3 md:col-span-4 col-span-12 py-2 space-y-8  ">
//       <div className="flex flex-col space-y-10 md:space-y-2">
//         <div className="flex flex-col  md:w-auto md:space-y-1 space-y-5">
//           <div className=" pt-8 ">
//             <div className="relative flex items-center  mb-3 text-gray-600 font-medium hover:text-blue-400 cursor-pointer hover:text-gray-600 hover:text-blue-500">
//               <div className="relative ">
//                 <div className="absolute bottom-0 text-center inline-block w-36  xl:w-36 px-4 py-2   text-white bg-red-700 rounded">
//                   <span className="inline-block text-sm text-center  md:text-xs xl:text-sm leading-tight">
//                     Featured Article
//                   </span>{" "}
//                   <span
//                     className="absolute bottom-0 right-0 w-3 h-3  -mb-1 transform rotate-45 bg-red-700"
//                     style={{ left: "50%" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {featuredPost ? (
//             <div>
//               <h3
//                 rel="noopener noreferrer"
//                 href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
//                 className="font-poppins text-xl hover:text-blue-400 md:pb-5 md:text-xl xl:text-2xl font-semibold "
//               >
//                 {featuredPost.title.rendered}
//               </h3>
//               <p
//                 className="text-[0.90rem] mb-10  md:text-sm md:pb-5 text-gray-600 hover:text-blue-400"
//                 dangerouslySetInnerHTML={{
//                   __html: truncateText(featuredPost.excerpt.rendered, 20),
//                 }}
//               ></p>
//             </div>
//           ) : (
//             <p>No featured blog post found in this category.</p>
//           )}{" "}
//           <div
//             href="https://medium.com/authority-magazine/homes-of-the-future-with-mike-syiek-of-networktigers-cde4326a170f"
//             className=" px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 text-sm md:text-base  text-center rounded text-white hover:bg-lime-600 bg-neutral-700"
//           >
//             Read More
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const featuredCategory = await getFeaturedCategory();

//   if (featuredCategory) {
//     const featuredPost = await getFeaturedBlogPost(featuredCategory.id);

//     return {
//       props: {
//         category: featuredCategory,
//         featuredPost,
//       },
//     };
//   } else {
//     return {
//       props: {
//         category: null,
//         featuredPost: null,
//       },
//     };
//   }
// }

// export default FeaturedCategory;
//nav
