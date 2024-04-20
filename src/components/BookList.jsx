// BookList.jsx
import React from 'react';
import './BookList.css';
import PropTypes from 'prop-types';

function BookList({ books, addToBasket }) {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="book">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <button onClick={() => addToBasket(book)}>Add to Basket</button>
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default BookList;
