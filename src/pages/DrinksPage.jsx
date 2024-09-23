import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DrinkCard from "../components/DrinkCard";
import "../pages/DrinksPage.css";

const DrinksPage = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      const data = await response.json();
      setData(data.drinks);
      console.log(data);
    };

    fetchData();
  }, []);

  
    const filterData = data.filter(
      (each) => each.strDrink.toLowerCase().includes(input.toLowerCase())
    );

    
    
    
  
  return (
    <div className="drinks_page-container">
      <h1>Drink Mixer</h1>

      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="seach some thing"
      />
      <ul>
        {filterData.map((each, index) => (
          <DrinkCard key={index} data={each} />
        ))}
      </ul>
    </div>
  );
};

export default DrinksPage;
