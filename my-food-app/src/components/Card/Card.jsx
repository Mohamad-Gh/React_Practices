import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
const starNumber = 5;
function Card({
  image,
  title = "title",
  description = "description",
  price = "0.00",
  rate = 4,
  review = "10,000",
  id,
  state,
}) {
  const navigate = useNavigate();
  const { setSelectedMeal, addFavorite, order } = useGlobalContext();
  return (
    <div className="card mx-auto">
      <div className="image-container">
        <img
          onClick={() => {
            setSelectedMeal(id);
            navigate(`${title}`);
          }}
          src={image}
          style={{ width: "200px" }}
          className="img mx-auto"
        />

        <div className="price">${price}</div>
      </div>
      <label className="favorite">
        <input
          // state true or false to check either meal is in favorite list or not
          checked={state}
          type="checkbox"
          onClick={() => addFavorite(id)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
        </svg>
      </label>

      <div className="content">
        <div className="brand">{title}</div>
        <div className="product-name line-clamp-2 pt-2 dark:text-primary">
          {description}
        </div>
        <div className="rating">
          <svg
            viewBox="0 0 99.498 16.286"
            xmlns="http://www.w3.org/2000/svg"
            className="svg four-star-svg"
          >
            {[...Array(starNumber)].map((_, index) => (
              <path
                key={index}
                fill={rate > index ? "#fc0" : "#e9e9e9"}
                transform={`translate(${index * 20 + 0.607} -1.047)`}
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                id={`star-svgrepo-com${index}`}
              />
            ))}
          </svg>
          ({review})
        </div>
      </div>

      <div className="button-container">
        <button className="buy-button button">Buy Now</button>
        <button className="cart-button button" onClick={() => order(id)}>
          <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z"
              id="cart-shopping-solid"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
