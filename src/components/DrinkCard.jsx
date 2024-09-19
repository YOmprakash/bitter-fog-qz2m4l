import React from "react";

import "../components/DrinkCard.css";

const DrinksPage = ({ data }) => {
  console.log(data);

  return (
    <li key={data.idDrink}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p>{data.strDrink}</p>
    </li>
  );
};
export default DrinksPage;
