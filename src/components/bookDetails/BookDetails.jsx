import { useContext } from 'react';
import { useLoaderData } from 'react-router'
import { bookContext } from '../../context/BookProvider';

// const bookDetailsPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { handleMarkAsRead, storeBooks, handleAddToWishlist, wishlistBooks } =
    useContext(bookContext);
  const bookDetails = useLoaderData();

  console.log(wishlistBooks);
  console.log(storeBooks);


  // console.log(params.id);

  //   const bookDetails = use(bookDetailsPromise)
  //   console.log('bookDetais: ', bookDetails);

  return (
    <>
      <div className="container mx-auto p-4 md:p-12 font-sans">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 bg-gray-100 rounded-3xl flex justify-center items-center p-12 md:p-20">
            <img
              src={bookDetails.image}
              alt={bookDetails.bookName}
              className="w-full max-w-87.5 shadow-2xl rounded-sm object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 font-serif">
              {bookDetails.bookName}
            </h1>
            <p className="text-xl text-gray-700 font-medium mb-6">
              By : {bookDetails.author}
            </p>

            <hr className="border-gray-200 mb-4" />
            <p className="text-xl text-gray-600 font-medium mb-4">
              {bookDetails.category}
            </p>
            <hr className="border-gray-200 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-6">
              <span className="font-bold text-gray-900">Review : </span>
              {bookDetails.review}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-bold text-gray-900">Tag</span>
              <div className="flex gap-3">
                {bookDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#F3FAF5] text-[#23BE0A] px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 mb-6" />

            <div className="space-y-4 mb-10 max-w-sm">
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Number of Pages:</span>
                <span className="font-bold text-gray-900">
                  {bookDetails.totalPages}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Publisher:</span>
                <span className="font-bold text-gray-900">
                  {bookDetails.publisher}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Year of Publishing:</span>
                <span className="font-bold text-gray-900">
                  {bookDetails.yearOfPublishing}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Rating:</span>
                <span className="font-bold text-gray-900">
                  {bookDetails.rating}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleMarkAsRead(bookDetails)}
                className=" btn btn-default"
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleAddToWishlist(bookDetails)}
                className=" btn btn-primary text-white "
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default BookDetails