import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../components/bookDetails/BookDetails";
import ListedBooks from "../pages/listedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: async ({params}) => {
          const res = await fetch('./booksData.json');
          const books = await res.json();
          const book = books.find( book => book.bookId === Number(params.id))
          if(!book) {
            throw new Response("Book details not found", {status: 404})
          }
          return book;
        }
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
