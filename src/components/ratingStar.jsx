import React from "react";


const Star = ({ filled }) => {
 return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`star-icon ${filled ? "filled" : "empty"}`}
      fill="none"
      stroke="none"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 10.385a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} filled={true} />);
    } else if (rating >= i - 0.5) {
      stars.push(
        <div key={i} className="star-wrapper">
          <Star filled={false} />
          <div className="half-star-overlay">
            <Star filled={true} />
          </div>
        </div>
      );
    } else {
      stars.push(<Star key={i} filled={false} />);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
