import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: (dots) => (
      <div className="dark:text-secondary">
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold ">Testimonial</h1>
          <p className="text-x5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dicta esse tenetur minus laudantium facere id voluptatem, corporis
            placeat ea!
          </p>
        </div>
        {/* testimonial section */}
        <div>
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full block mx-auto"
                    />
                    <p className="text-gray-500 text-sm">{data.text}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-white">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
