import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags = [],
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 border border-gray-200 rounded-3xl bg-white shadow-sm">
      {/* Image Section */}
      <div className="w-full md:w-60 h-60 bg-gray-100 rounded-2xl flex justify-center items-center p-6">
        <img
          src={image}
          alt={bookName}
          className="h-full object-contain shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
          {bookName}
        </h2>
        <p className="text-gray-700 font-medium mb-4">By : {author}</p>

        {/* Tags and Year */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-bold text-gray-900">Tag</span>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[#23BE0A] bg-green-50 px-4 py-1 rounded-full font-semibold text-sm"
            >
              #{tag}
            </span>
          ))}
          <div className="flex items-center gap-2 text-gray-500 ml-2">
            <span>📍</span>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher and Pages */}
        <div className="flex flex-wrap gap-6 text-gray-500 mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <span>👥</span>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📄</span>
            <span>Page {totalPages}</span>
          </div>
        </div>

        {/* Category, Rating & Button */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#E0EEFF] text-[#328EFF] px-5 py-2 rounded-full font-medium">
            Category: {category}
          </span>
          <span className="bg-[#FFF3E1] text-[#FFAC33] px-5 py-2 rounded-full font-medium">
            Rating: {rating}
          </span>
          <Link
            to={`/bookDetails/${bookId}`}
            className="bg-[#23BE0A] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1da108] transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
