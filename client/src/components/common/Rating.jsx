import React from 'react';

const ratingStyle = {
  color: '#f8e825', // A golden yellow for the stars
  margin: '0.1rem',
};

const ratingTextStyle = {
  fontSize: '0.9rem',
  fontWeight: '600',
  color: '#888',
  marginLeft: '0.5rem',
};


const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span style={ratingStyle}>
        <i className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span style={ratingStyle}>
        <i className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span style={ratingStyle}>
        <i className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span style={ratingStyle}>
        <i className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span style={ratingStyle}>
        <i className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span style={ratingTextStyle}>{text && text}</span>
    </div>
  );
};

// This line is absolutely essential for the import to work.
export default Rating;