import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id); //inline return statemnt

  const handleOnSubmit = (book) => {
    console.log(book.id);
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };
  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
