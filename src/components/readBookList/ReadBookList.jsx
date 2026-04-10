import React, { useContext } from "react";
import { bookContext } from "../../context/BookProvider";
import BookCard from "../card/listedBookCard/BookCard";

const ReadBookList = () => {
  const { storeBooks } = useContext(bookContext);

  if (!storeBooks || storeBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          No Read Books Yet
        </h2>
        <p className="text-gray-500">Books you have read will appear here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-6">
      {storeBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ReadBookList;
