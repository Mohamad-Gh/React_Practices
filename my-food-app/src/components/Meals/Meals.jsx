import React from "react";
import { useGlobalContext } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
function Meals() {
  const { meals, favorites, loading } = useGlobalContext();
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
              className="single-meal dark:bg-gray-900 dark:text-white"
            >
              <Card
                image={image}
                title={title}
                description={text}
                id={idMeal}
                state={favorites.some((item) => item.idMeal === idMeal)}
              />
              {/* <img
                onClick={() => {
                  setSelectedMeal(idMeal);
                  navigate(`${title}`);
                }}
                src={image}
                style={{ width: "200px" }}
                className="img mx-auto"
              /> */}
              {/* <footer>
                <h5 className="font-bold">{title}</h5>
                <button
                  className="like-btn"
                  onClick={() => addFavorite(idMeal)}
                >
                  <FaRegThumbsUp />
                  <Like />
                </button>
                <IconButton
                  color="warning"
                  aria-label="add to shopping cart"
                  className="like-btn hover:text-green-500"
                  onClick={() => order(idMeal)}
                >
                  <span>{card?.[idMeal]?.number || 0}</span>
                  <AddShoppingCartIcon />
                </IconButton>
                <p className="line-clamp-2 pt-2 dark:text-primary">{text}</p>
              </footer> */}
            </article>
          );
        }
      )}
    </section>
  );
}

export default Meals;
