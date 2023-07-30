import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const LoadMoreItems = ({ items }) => {
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Ensure items is an array before slicing it
    if (Array.isArray(items)) {
      setVisibleItems(items.slice(0, itemsPerPage));
    }
  }, [items]);

  const handleLoadMore = () => {
    const nextIndex = visibleItems.length + itemsPerPage;
    setVisibleItems(items.slice(0, nextIndex));
  };

  if (!Array.isArray(items)) {
    return <p>No items to display.</p>;
  }

  return (
    <div>
      {visibleItems.map((item, index) => (
        <ItemCard
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
          category={item.category}
          name={item.name}
          date={item.date}
          description={item.description}
          readMore={item.readMore}
        />
      ))}
      {items.length > visibleItems.length && (
        <button
          className="mx-5 md:mx-0 px-1 py-2 w-24 md:px-2 md:py-4 md:w-40 text-sm md:text-base  text-center rounded text-black hover:text-white cursor-pointer bg-lime-600 hover:bg-neutral-700"
          onClick={handleLoadMore}
        >
          Load More..
        </button>
      )}
    </div>
  );
};

export default LoadMoreItems;
