import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Meals() {
  const { meals, loading, setSelectedMeal, addFavorite } = useGlobalContext();
  // const [loading, setLoading] = useState(false);
  // const [meals, setMeals] = useState([]);

  // const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data } = await axios.get(url);
  //       data.meals.length > 0 ? setMeals(data) : null;
  //     } catch (e) {}
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (meals == null || meals.length < 1) {
    return <h1>No Meals Found!!</h1>;
  }

  return (
    <section className="section-center">
      {meals.map(
        ({
          idMeal,
          strMeal: title,
          strMealThumb: image,
          strInstructions: text,
        }) => {
          return (
            <article
              key={idMeal}
              className="single-meal dark:bg-gray-900 text-white"
            >
              <Link to="/selectedMeal:title">
                <img
                  onClick={() => {
                    setSelectedMeal(idMeal);
                  }}
                  src={image}
                  style={{ width: "200px" }}
                  className="img mx-auto"
                />
              </Link>
              <footer>
                <h5 className="font-bold">{title}</h5>
                <button
                  className="like-btn"
                  onClick={() => addFavorite(idMeal)}
                >
                  <FaRegThumbsUp />
                </button>
                <p className="line-clamp-2 pt-2">{text}</p>
              </footer>
            </article>
          );
        }
      )}
    </section>
  );
}

export default Meals;
