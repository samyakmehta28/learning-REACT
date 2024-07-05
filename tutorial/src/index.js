import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1 className="heading">Amazon Best Sellers</h1>
      <EventExamples />
      <section className="bookList">
        {books.map((book, index) => {
          // {... book} sends all the properties of the book object as props
          //react does not pass key down, just need it as a unique identifier
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              number={index}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

const EventExamples = () => {
  // can place these handler functions anywhere in the file. Can even place it in a different file and import it
  const handleFormInput = (e) => {
    console.log(e.target.name, ' : ', e.target.value);
  };

  const handleButtonClick = () => {
    alert('You just clicked me');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <section className="eventExample">
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          placeholder="dummy"
          styles={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
