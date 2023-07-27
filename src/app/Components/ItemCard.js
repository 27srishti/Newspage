// components/ItemCard.js
// @client
"use client";

const ItemCard = ({
  title,
  imageUrl,
  description,
  category,
  name,
  date,
  readMore,
}) => {
  return (
    <div className="w-full ">
      <a
        className="block rounded w-full lg:flex mb-10"
        href="./blog-single-1.html"
      >
        <div>
          <a>
            <img
              className="w-full h-80 md:w-full lg:w-[30rem] mb-5 md:mb-5 lg:mb-0  lg:h-[15rem] object-cover md:rounded "
              src={imageUrl}
              alt={title}
            />
          </a>
        </div>
        <div className="bg-white rounded pl-5 lg:pl-5 md:pl-0 flex w-full flex-col justify-evenly leading-normal">
          <div className="">
            <a className="mt-3  lg:mt-0 hover:text-lime-600 text-gray-700 font-bold text-2xl  mb-2">
              {title}
            </a>
            <div className="flex pb-6 pt-1">
              <div className="bg-neutral-600 hover:text-lime-400 px-2 py-1.5 text-center text-[0.75rem] rounded text-white">
                {category}
              </div>
              <div className="mx-2 text-[0.75rem] text-center py-1.5 font-medium">
                {name} - <span className="font-light">{date}</span>
              </div>
            </div>
            <p className="text-gray-500 w-[90%]  text-base">{description}</p>
          </div>
          <div className="flex mt-3">
            <a
              href={readMore}
              className=" px-1 py-2 w-24 md:px-2 md:py-2 md:w-28 text-sm md:text-base  text-center rounded text-white cursor-pointer bg-lime-600 hover:bg-neutral-700"
            >
              Read More
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemCard;
