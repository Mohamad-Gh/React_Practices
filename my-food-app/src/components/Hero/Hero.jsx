import React, { useState } from "react";

import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import BiryaniImg3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

function Hero() {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  const [imageId, setImageId] = useState("");
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                Welcome to the <span className="text-primary">Foodie</span> Zone
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                nesciunt autem nemo rem magni sapiente beatae. Sed magnam cumque
                odit?
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-xl rounded-full hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* main image  */}
              <div>
                <img
                  className="w-[300px] sm:w-[450px] mx-auto rounded-full spin"
                  src={BiryaniImg3}
                  alt="rotating-dish"
                />
              </div>
              {/* image list */}
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
