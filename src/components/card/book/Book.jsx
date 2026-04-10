import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    tags,
    rating
  } = book;

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
    >
      {/* Cover image area */}
      <div className="bg-gray-100 rounded-xl m-3 flex items-center justify-center h-56">
        <img
          src={image}
          alt={bookName}
          className="h-48 object-contain drop-shadow-md"
        />
      </div>

      {/* Card body */}
      <div className="px-4 pb-4 flex flex-col gap-2 flex-1">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-1">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full px-3 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          {bookName}
        </h2>
        <p className="text-sm md:text-lg text-gray-500">By : {author}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 mt-auto pt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">{category}</span>
          <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
            <span>{rating?.toFixed(2)}</span>
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
