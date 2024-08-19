import React, { useEffect, useState } from "react";
import axios from "./Axios";
import "./style.css";

function LoadMoreButtons() {
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState(null);
  const [limit, setLimit] = useState(100);
  const [disableButton, setDisableButton] = useState(false);
  const [limitNumber, setLimitNumber] = useState(20);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/products", {
          params: { limit: limit, skip: "0" },
        });
        setProducts(data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setErrorMsg(e);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <h2> Loading ...</h2>;
  }

  if (errormsg) {
    return <h2>Something went wrong {errormsg}</h2>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products
              .filter((element) => element.id <= limitNumber)
              .map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
          : null}
      </div>
      <div className="button-container">
        {!disableButton ? (
          <button
            onClick={() => {
              if (limitNumber + 20 <= 100) {
                setLimitNumber(limitNumber + 20);
              } else {
                setDisableButton(true);
              }
            }}
          >
            Load More Products
          </button>
        ) : (
          <p>You have reached to 100 products</p>
        )}
      </div>
    </div>
  );
}

export default LoadMoreButtons;
