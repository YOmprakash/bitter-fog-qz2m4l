import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrinksPage from "./pages/DrinksPage";
import DrinkDetailsPage from "./pages/DrinkDetailsPage"; // Add the details page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrinksPage />} />
        <Route path="/drink/:id" element={<DrinkDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
