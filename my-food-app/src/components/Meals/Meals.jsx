import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { FaRegThumbsUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Meals() {
  const { order } = useGlobalContext();
  const { meals, loading, setSelectedMeal, addFavorite, addCard } =
    useGlobalContext();
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
  const navigate = useNavigate();
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
              {/* <Link to={navigate(`/selectedMeal/${title}`)}> */}
              <img
                onClick={() => {
                  setSelectedMeal(idMeal);
                  navigate(`${title}`);
                }}
                src={image}
                style={{ width: "200px" }}
                className="img mx-auto"
              />
              {/* </Link> */}
              <footer>
                <h5 className="font-bold">{title}</h5>
                <button
                  className="like-btn"
                  onClick={() => addFavorite(idMeal)}
                >
                  <FaRegThumbsUp />
                </button>
                <IconButton
                  color="warning"
                  aria-label="add to shopping cart"
                  className="like-btn hover:text-green-500"
                  onClick={() => order(idMeal)}
                >
                  {/* <span>{card?.[idMeal]?.number || 0}</span> */}
                  <AddShoppingCartIcon />
                </IconButton>
                <p className="line-clamp-2 pt-2 dark:text-primary">{text}</p>
              </footer>
            </article>
          );
        }
      )}
    </section>
  );
}

export default Meals;
