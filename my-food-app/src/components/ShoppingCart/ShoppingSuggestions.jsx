import React from "react";
import { useGlobalContext } from "../../Context/Context";
const random = Math.floor(Math.random() * 20);
console.log(random);

function ShoppingSuggestions() {
  const { meals, order, addFavorite } = useGlobalContext();
  return (
    <div className="hidden xl:mt-8 xl:block">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        People also bought
      </h3>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        {meals.slice(random, random + 3).map((item) => (
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto h-44 w-44"
                src={item.strMealThumb}
                alt={`${item.strMeal} image`}
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {item.strMeal}
              </a>
              <p className="line-clamp-3 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Ingredients:
                <br></br>
                {item.strIngredient1 ?? ""}, {item.strIngredient2 ?? ""},{" "}
                {item.strIngredient3 ?? ""},{item.strIngredient4 ?? ""},{" "}
                {item.strIngredient5 ?? ""}.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-third-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <button
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                onClick={() => addFavorite(item.idMeal)}
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </button>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-third-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-third-800 focus:outline-none focus:ring-4 focus:ring-third-300 dark:bg-third-600 dark:hover:bg-third-700 dark:focus:ring-third-800"
                onClick={() => order(item.idMeal)}
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingSuggestions;
