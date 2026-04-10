import React, { useContext } from 'react'
import { bookContext } from '../../context/BookProvider'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ReadBookList from '../../components/readBookList/ReadBookList';
import WishBookList from '../../components/wishBookList/WishBookList';

const ListedBooks = () => {
  const { storeBooks, wishlistBooks } =
    useContext(bookContext);
  console.log(storeBooks, 'storeBooks');
  console.log(wishlistBooks, 'wishlistBooks');
  return (
    <>
      <div className="container mx-auto p-4 md:p-8 ">
        <div className="bg-gray-100 rounded-2xl py-8 mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Books</h1>
        </div>

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
}

export default ListedBooks