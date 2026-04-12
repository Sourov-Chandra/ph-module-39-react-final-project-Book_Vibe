const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  return allReadList ? JSON.parse(allReadList) : []; // ✅ always returns array
};

const addReadListToLocalDB = (book) => {  
  const allBooks = getAllReadListFromLocalDB();

  const isAlreadyExist = allBooks.find((b) => b.bookId === book.bookId);
  if (!isAlreadyExist) {
    // this data will be stored in local storage
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

export { getAllReadListFromLocalDB, addReadListToLocalDB };
