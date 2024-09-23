import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DrinkDetailsPage = () => {
  const {id} = useParams();
  const [drink, setDrink] = useState(null);
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
    }
    fetchData();

  },[id])
  if (!drink) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <p>{drink.strCategory}</p>
      <p>{drink.strAlcoholic}</p>
      <p>{drink.strInstructions}</p>
      <ul>
        {drink.strIngredient1 && <li>{drink.strIngredient1}</li>}
        {drink.strIngredient2 && <li>{drink.strIngredient2}</li>}
        {/* Add more ingredients as needed */}
      </ul>
    </div>
  )
}

export default DrinkDetailsPage