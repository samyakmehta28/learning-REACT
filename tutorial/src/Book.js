const Book = ({ img, alt, title, author, id, number, getBook, children }) => {
  //const { img, alt, title, author } = props;
  return (
    <article className="book">
      <span className="number">#{number + 1}</span>
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <button
        // if we directly call getBook(id) it will call the function immediately and not wait for it to be clicked
        onClick={() => {
          getBook(id);
        }}
      >
        Click Me
      </button>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Book;
