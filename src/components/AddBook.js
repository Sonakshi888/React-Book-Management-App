import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';
import BookForm from "./BookForm";

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  //history prop is automatically passed by React Router to every component mentioned in <Route />. We are passing the books and setBooks props from AppRouter.js file.
  const handleOnSubmit = (book) => {
    {
      /** executes when returns from BookForm.js */
    }
    setBooks([book, ...books]);
    history.push("/"); //redirecting the user to the BookList
    // console.log(book);
  };
  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} /> {/** going to BookForm.js */}
    </>
  );
};

export default AddBook;
