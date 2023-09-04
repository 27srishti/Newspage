import Link from "next/link";

async function getBlogs() {
  const res = await fetch(
    "https://news.networktigers.com/wp-json/wp/v2/posts",
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

const Hero = ({ recentBlogs, recentAuthors, recenCatogory }) => {
  return (
    <section>
    <div className="container  justify-center mt-2 md:mt-5 flex row-span-1 gap-1  mx-auto w-full">
       <div className="aspect-auto lg:mx-10 2xl:mx-0 w-auto">
      {recentBlogs.slice(0, 1).map((posts, index) => {
        const authorName = recentAuthors[index] || "Unknown Author";
        const categoryName = recenCatogory[index] || "Unknown Category";
        return (
          <a
            href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
            className="relative "
            key={posts.id}
          >
            <img
             className="block w-full h-[15rem]  md:w-[80rem] lg:w-[200rem]  lg:h-[30rem] object-cover object-center"
              src={posts.jetpack_featured_media_url}
              alt={`Image for blog post: ${posts.title.rendered}`}
              layout="responsive"
            />
           <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5 "></div>
              <div className="absolute bottom-1 px-5">
                <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                  {categoryName}
                </div>

              <div
                href="/"
                className="text-gray-100 font-bold text-sm md:text-xl capitalize"
              >
                {posts.title.rendered}
              </div>

              <div className="flex pb-3">
                <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                  {authorName} -{" "}
                  <span className="font-light">
                    {new Date(posts?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </a>
        );
      })}
      <div className="flex mt-1 gap-1">
        {recentBlogs.slice(1, 2).map((posts, index) => {
          const authorName = recentAuthors[index] || "Unknown Author";
          const categoryName = recenCatogory[index] || "Unknown Category";
          return (
            <div className="w-full" key={posts.id}>
              <a
                href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                className="relative"
              >
                <img
                  className="block w-full h-48 md:h-[15rem] object-cover object-center"
                  src={posts.jetpack_featured_media_url}
                  alt={`Image for blog post: ${posts.title.rendered}`}
                  layout="responsive"
                />
                <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
                <div className="absolute bottom-1 px-5">
                <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                      {categoryName}
                    </div>
                  <div
                    href="/"
                    className="text-gray-100 font-bold text-sm md:text-xl capitalize"
                  >
                    {posts.title.rendered}
                  </div>
                  <div className="flex pb-3">
                    <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                      {authorName} -{" "}
                      <span className="font-light">
                        {new Date(posts?.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
        {recentBlogs.slice(2, 3).map((posts, index) => {
          const authorName = recentAuthors[index] || "Unknown Author";
          const categoryName = recenCatogory[index] || "Unknown Category";
          return (
            <div className="w-full" key={posts.id}>
              <a
                href="https://news.networktigers.com/opinion/could-the-kronos-hack-have-been-prevented/"
                className="relative"
              >
                <img
                  className="block w-full md:h-[15rem] h-48 object-cover object-center"
                  src={posts.jetpack_featured_media_url}
                  alt={`Image for blog post: ${posts.title.rendered}`}
                  layout="responsive"
                />
                <div className="bg-black opacity-50 w-full h-full absolute bottom-0 px-5"></div>
                <div className="absolute bottom-1 px-5">
                  <div className="bg-neutral-600 w-32 mb-2 hover:bg-yellow-300 hover:text-black px-2 py-1.5 text-center text-[0.65rem] md:text-[0.70rem] rounded text-white">
                    {categoryName}
                  </div>
                  <div
                    href="/"
                    className="text-gray-100 font-bold text-sm md:text-xl capitalize"
                  >
                    {posts.title.rendered}
                  </div>
                  <div className="flex pb-3">
                    <div className="text-[0.75rem] text-white text-left py-1.5 font-medium">
                      {authorName}-{" "}
                      <span className="font-light">
                        {new Date(posts?.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div></div>
    </div>

    </section>
  );
};
export const getServerSideProps = async () => {
  try {
    const recentBlogs = await getBlogs();
    const recentAuthors = await Promise.all(
      recentBlogs.map((post) => getAuthor(post.author))
    );
    const recenCatogory = await Promise.all(
      recentBlogs.map((post) => getCategories(post.categories[1]))
    );

    return {
      props: {
        recentBlogs,
        recentAuthors,
        recenCatogory,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default Hero;