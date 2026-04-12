import React, { useContext, useState } from "react";
import { bookContext } from "../../context/BookProvider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBookList from "../../components/readBookList/ReadBookList";
import WishBookList from "../../components/wishBookList/WishBookList";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const { storeBooks, setStoreBooks, wishlistBooks, setWishListBooks } =
    useContext(bookContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("Sort By");

  const handleSort = (type, label) => {
    setSortLabel(label);
    setDropdownOpen(false);

    if (type === "rating") {
      const sorted = [...storeBooks].sort((a, b) => b.rating - a.rating);
      setStoreBooks(sorted);
      const sortedWish = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
      setWishListBooks(sortedWish);
    } else if (type === "pages") {
      const sorted = [...storeBooks].sort(
        (a, b) => b.totalPages - a.totalPages,
      );
      setStoreBooks(sorted);
      const sortedWish = [...wishlistBooks].sort(
        (a, b) => b.totalPages - a.totalPages,
      );
      setWishListBooks(sortedWish);
    } else if (type === "year") {
      const sorted = [...storeBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing,
      );
      setStoreBooks(sorted);
      const sortedWish = [...wishlistBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing,
      );
      setWishListBooks(sortedWish);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="bg-gray-100 rounded-2xl py-8 mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Books</h1>
        </div>

        {/* Sort By Button */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-[#23BE0A] hover:bg-[#1da108] text-white font-semibold px-6 py-2.5 rounded-lg transition"
            >
              {sortLabel}

              <IoIosArrowDown />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                <button
                  onClick={() => handleSort("rating", "Rating")}
                  className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
                >
                  Rating
                </button>
                <button
                  onClick={() => handleSort("pages", "Number of Pages")}
                  className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
                >
                  Number of Pages
                </button>
                <button
                  onClick={() => handleSort("year", "Year of Publishing")}
                  className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
                >
                  Year of Publishing
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wish Read Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBookList />
          </TabPanel>
          <TabPanel>
            <WishBookList />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
