import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrinksPage from "./pages/DrinksPage";
import DrinkCard from "./components/DrinkCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrinksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
