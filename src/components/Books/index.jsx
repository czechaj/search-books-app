import React from "react";
import { useBooks } from "../../contexts/BooksContext";
import BookCard from "../BookCard";
import NotFound from "../NotFound";

function Books() {
  const { books } = useBooks();
  return (
    <div className="container my-5">
      <div className="row">
        {books ? (
          books.map((book) => (
            <div
              key={book.id}
              className="col-sm-12 col-md-4 col-lg-3 d-flex flex-column align-items-center"
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default Books;
