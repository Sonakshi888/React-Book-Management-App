import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; //to have unique ids everytime the function is called

const BookForm = (props) => {
  //props contains book object being passed from editBook.js
  //book is an object
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : "",
      author: props.book ? props.book.author : "",
      quantity: props.book ? props.book.quantity : "",
      price: props.book ? props.book.price : "",
      date: props.book ? props.book.date : "",
    };
  });
  const [errorMsg, setErrorMsg] = useState(""); //array destructuring
  const { bookname, author, price, quantity } = book; //object destructuring

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      //every method returns either true or false
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });
    if (allFieldsFilled) {
      //double check to make sure that the fields are not empty and trimmed
      const book = {
        id: uuidv4(),
        bookname,
        author,
        quantity,
        price,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields!";
    }
    setErrorMsg(errorMsg);
  };
  const handleInputChange = (event) => {
    //function to run on edit
    const { name, value } = event.target;
    console.log(event.target);
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          //checking for only integer value and also allowing empty value so that the user can also delete the value for the field.
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          //checking for decimal number with only two digits after the decimal point
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        //for all other fields default case will execute
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
