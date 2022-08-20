import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from "../context/BooksContext";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []); //array destructuring, storing books in as an empty array in the local storage
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              {/**switch is used to render one route at one time if more than one route matches with the link */}
              {/* Route when context API is not used
             <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            /> */}
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />{" "}
              {/** for any other url like /random */}
            </Switch>
          </BooksContext.Provider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
