import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useBooks } from "../../contexts/BooksContext";
import { Container, Image } from "react-bootstrap";

function BookDetail() {
  const { getBookDetail, bookDetail } = useBooks();

  const { id } = useParams();
  useEffect(() => {
    getBookDetail(id);
  }, [getBookDetail, id]);
  return (
    <>
      <Link to={"/"} className="btn btn-outline-dark float-start ms-2 ">
        Back
      </Link>
      <Container className="mt-5">
        <div className="row">
          <div className=" col-sm-5">
            {" "}
            <Image
              className="text-start mb-3 float-end"
              loading="lazy"
              src={
                bookDetail.imageLinks
                  ? bookDetail.imageLinks.smallThumbnail
                  : "https://cdn-d8.nypl.org/s3fs-public/blogs/sJ3CT4V.gif"
              }
              style={{ width: "14rem", height: "20rem" }}
            />
            <p className="text-start fw-bold">
              Author:
              {bookDetail.authors &&
                bookDetail.authors.map((author, key) => (
                  <span className="fw-normal" key={key}>
                    {" "}
                    {author}
                  </span>
                ))}
            </p>
            <p className="text-start fw-bold">
              Published Date:{" "}
              <span className="fw-normal"> {bookDetail.publishedDate}</span>
            </p>
            <p className="text-start fw-bold">
              {" "}
              Publisher:
              <span className="fw-normal"> {bookDetail.publisher}</span>
            </p>
            {bookDetail.categories && (
              <p className="text-start fw-bold">
                Categories:
                {bookDetail.categories.map((category, key) => (
                  <span className="fw-normal" key={key}>
                    {" "}
                    {category}
                  </span>
                ))}
              </p>
            )}
            <p className="text-start fw-bold">
              {" "}
              Pages:
              <span className="fw-normal"> {bookDetail.pageCount}</span>
            </p>
            <p className="text-start fw-bold">
              {" "}
              Language:
              <span className="fw-normal"> {bookDetail.language}</span>
            </p>
          </div>
          <div className="col-sm-7 offset-sm-1" style={{ height: "80vh" }}>
            <h1>{bookDetail.title}</h1>
            <p className="text-start mx-2">{bookDetail.description}</p>
            <small>
              For more info,{" "}
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={bookDetail.infoLink}
              >
                visit
              </a>
            </small>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BookDetail;
