import { useContext } from "react";
import { booksContext } from "../../pages/Home";
import BookCard from "./BookCard";

const Books = () => {
  const books = useContext(booksContext);
  console.log(books);
  return (
    <div className="container mt-5">
      <h1 className="text-center font-bold text-3xl playfair-font m-10">
        Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-evenly gap-5">
        {Array.isArray(books) ? (books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  );
};

export default Books;
