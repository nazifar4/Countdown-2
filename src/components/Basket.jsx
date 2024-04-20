// Basket.jsx
import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';

function Basket({ basket, removeFromBasket }) {
  return (
    <div>
      <h2>Basket</h2>
      {basket.map((book, index) => (
        <div key={index} className="basket-item">
          <h4>{book.title}</h4>
          <button onClick={() => removeFromBasket(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default Basket;
