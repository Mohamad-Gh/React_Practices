import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];

function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold ">Services</h1>
            <p className="text-x5 text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nobis? Atque nulla, consequatur deserunt dolorum blanditiis minus
              ab unde ipsa.
            </p>
          </div>
          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:grid-cols-3 md:gap-5 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => (
              <div
                key={id}
                className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl"
              >
                <div className="h-[100px]">
                  <img
                    className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    src={img}
                    alt={name}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
