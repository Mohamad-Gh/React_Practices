import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
        className="star-rating"
      >
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              id={index}
              key={index}
              size={40}
              onClick={(event) => {
                setRating(event.currentTarget.id);
                // console.log(event);
              }}
              onMouseMove={(event) => {
                setHover(event.currentTarget.id);
                // console.log(event);
              }}
              onMouseLeave={() => {
                rating ? setHover(rating) : setHover(0);
              }}
            />
          );
        })}
      </div>
    </main>
  );
}

export default StarRating;
