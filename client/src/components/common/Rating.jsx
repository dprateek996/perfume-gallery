import React from 'react';

const Rating = ({ value, text }) => {
  const renderStar = (index) => {
    const filled = value >= index;
    const half = !filled && value >= index - 0.5;
    
    if (filled) {
      return (
        <svg className="w-4 h-4 text-gold fill-gold" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    } else if (half) {
      return (
        <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`half-${index}`}>
              <stop offset="50%" stopColor="#c9a66b" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon 
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
            fill={`url(#half-${index})`}
            stroke="#c9a66b"
            strokeWidth="1"
          />
        </svg>
      );
    } else {
      return (
        <svg className="w-4 h-4 text-sand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>{renderStar(index)}</span>
      ))}
      {text && <span className="text-sm text-stone ml-2">{text}</span>}
    </div>
  );
};

export default Rating;