import React, { use } from "react";
import Book from "../card/book/Book";


const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
  const books = use(booksPromise);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
