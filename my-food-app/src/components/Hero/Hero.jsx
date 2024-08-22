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
              <h1 className="">
                Welcome to the <span className="text-primary">Foodie</span> Zone
              </h1>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum faucibus sagittis lacus, et sagittis turpis
                pellentesque vel. Curabitur odio quam, tempus eget metus ac,
                venenatis pulvinar elit.
              </div>
              <div>
                <button className="bg-primary text-white text-xl rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            <div>Rotating Food Picture</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
