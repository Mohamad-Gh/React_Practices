import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { FaRegThumbsUp } from "react-icons/fa6";

function Meals() {
  const { meals, loading } = useGlobalContext();
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
      {meals.map(({ idMeal, strMeal: title, strMealThumb: image }) => {
        return (
          <article key={idMeal} className="single-meal">
            <img
              onClick={() => {
                selectMeal(idMeal);
              }}
              src={image}
              style={{ width: "200px" }}
              className="img"
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn" onClick={() => addFavorite(idMeal)}>
                <FaRegThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
