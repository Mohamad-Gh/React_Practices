import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "./Axios";
import { page, limit } from "../../constants/const";

function ImageSlider({ imageLimit = limit }) {
  const [imageList, setImageList] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/list", {
          params: { page: page, limit: imageLimit },
        });
        if (data) {
          setImageList(data);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Something Went Wrogn {error}</h1>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => {
          if (0 < currentSlide) {
            setCurrentSlide(currentSlide - 1);
          } else {
            setCurrentSlide(imageList.length - 1);
          }
        }}
      />
      {imageList && imageList.length
        ? imageList.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => {
          if (imageList.length - 1 > currentSlide) {
            setCurrentSlide(currentSlide + 1);
          } else {
            setCurrentSlide(0);
          }
        }}
      />
      <span className="circle-indicators">
        {imageList && imageList.length
          ? imageList.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
