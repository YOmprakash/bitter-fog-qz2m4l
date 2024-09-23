import React from "react";

import "../components/DrinkCard.css";
import { Link } from "react-router-dom";

const DrinksPage = ({ data }) => {
  console.log(data);

  return (
    <li key={data.idDrink}>
    <Link to={`/drink/${data.idDrink}`}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p>{data.strDrink}</p>
    </Link>
  </li>
  );
};
export default DrinksPage;
