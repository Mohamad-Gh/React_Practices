import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "./Axios";
import { page, limit } from "../../constants/const";

function ImageSlider() {
  const [imageList, setImageList] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/list", {
          params: { page: page, limit: limit },
        });
        setImageList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
