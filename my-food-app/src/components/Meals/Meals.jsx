import React, { useEffect, useState } from "react";
import axios from "axios";
function Meals() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        data.meals.length > 0 ? console.log(data) : console.log("no Data");
        data.meals.length > 0 ? setMeals(response.data) : null;

        // setLoading(false);
      } catch (e) {}
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return <div>Meals</div>;
}

export default Meals;
