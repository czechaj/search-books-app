import { useState, useContext, createContext, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);

  const baseURL = "https://www.googleapis.com/books/v1/volumes";
  const getBooks = async (text) => {
    const searchedBooks = await axios.get(
      `${baseURL}?q=intitle:${text}&maxResults=20`
    );
    setBooks(searchedBooks.data.items);
  };

  const getBookDetail = useCallback(async (id) => {
    const bookDetail = await axios.get(`${baseURL}/${id}`);
    setBookDetail(bookDetail.data.volumeInfo);
  }, []);

  const values = {
    books,
    getBooks,
    getBookDetail,
    bookDetail,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

const useBooks = () => useContext(BooksContext);

export { useBooks, BooksProvider };
