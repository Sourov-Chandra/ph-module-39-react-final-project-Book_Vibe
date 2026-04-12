import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadListFromLocalDB } from "../utils/localDB";

export const bookContext = createContext();

const BookProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishlistBooks, setWishListBooks] = useState([]);

/*   useEffect( () => {
    const getReadListFromLocalDB = getAllReadListFromLocalDB();
    console.log(getReadListFromLocalDB, "getReadListFromLOcalDB");
  } ,[]) */
   useEffect(() => {
     const saved = getAllReadListFromLocalDB();
     setStoreBooks(saved); // ✅ restore state from localStorage on page load
   }, []);

  const handleMarkAsRead = (book) => {

    addReadListToLocalDB(book)

    const isAlreadyWishList = wishlistBooks.find(
      (b) => b.bookId === book.bookId,
    );

    if(isAlreadyWishList) return toast.error('You have already added this book to wishlist')

    const isAlreadyMarkAsRead = storeBooks.find((b) => b.bookId === book.bookId);
    if (isAlreadyMarkAsRead) {
      toast.error("This book is already added to list");
    } else {
      setStoreBooks([...storeBooks, book]);
      toast.success(`${book.bookName} is added to Read list`)
    }
  };
  const handleAddToWishlist = (wishBook) => {

    const isAlreadyMarkAsRead = storeBooks.find(
      (b) => b.bookId === wishBook.bookId,
    );
    if(isAlreadyMarkAsRead) return toast.error('You have already marked this book as read');

    const isAlreadyWishList = wishlistBooks.find(
      (b) => b.bookId === wishBook.bookId,
    );
    if (isAlreadyWishList) {
      toast.error("This book is already added to list");
    } else {
      setWishListBooks([...wishlistBooks, wishBook]);
      toast.success(`${wishBook.bookName} is added to Wish list`);
    }
  };

  const data = {
    storeBooks,
    setStoreBooks,
    handleMarkAsRead,
    handleAddToWishlist,
    wishlistBooks,
    setWishListBooks
  };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default BookProvider;
