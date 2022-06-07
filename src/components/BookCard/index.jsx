import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useBooks } from "../../contexts/BooksContext";

function BookCard({ book }) {
  const { getBookDetail } = useBooks();

  const handleClick = (id) => {
    getBookDetail(id);
  };

  return (
    <Card className="mb-4" style={{ width: "18rem", height: "25rem" }}>
      <Card.Img
        variant="top"
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.smallThumbnail
            : "https://cdn-d8.nypl.org/s3fs-public/blogs/sJ3CT4V.gif"
        }
        className="rounded-1 mx-auto mt-3"
        style={{ height: "40%", width: "40%" }}
      />
      <Card.Body className="overflow-auto">
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        {book.volumeInfo.authors &&
          book.volumeInfo.authors.map((author, key) => (
            <Card.Text key={key}>{author}</Card.Text>
          ))}
        <Link
          to={`${book.id}`}
          className={"btn btn-outline-dark"}
          onClick={() => handleClick(book.id)}
        >
          See details
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
