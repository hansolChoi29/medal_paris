// src/MedalTracker.js
//완성품
import "./App.css";
import Footer from "./Components/Footer";
import MedalList from "./Components/MedalList";
import MedalForm from "./Components/MedalForm";
import { useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleDelete = (countryName) => {
    setCountries(countries.filter((country) => country.name !== countryName));
  };

  return (
    <div>
      <h1>2024 Paris Olympics</h1>

      <MedalForm countries={countries} setCountries={setCountries} />

      <MedalList countries={countries} handleDelete={handleDelete} />

      <Footer />
    </div>
  );
};

export default App;
