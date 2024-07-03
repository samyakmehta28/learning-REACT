import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const img =
  'https://images-na.ssl-images-amazon.com/images/I/81q6ecxcZUL._AC_UL600_SR600,400_.jpg';
const alt = 'Reckless (The Powerless Trilogy)';
const title = 'Reckless (The Powerless Trilogy)';
const author = 'Lauren Roberts';

const BookList = () => {
  return (
    <section className="bookList">
      <Book img={img} alt={alt} title={title} author={author} />
      <Book img={img} alt={alt} title={title} author={author} />
      <Book img={img} alt={alt} title={title} author={author} />
      <Book img={img} alt={alt} title={title} author={author} />
      <Book img={img} alt={alt} title={title} author={author} />
      <Book img={img} alt={alt} title={title} author={author} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
