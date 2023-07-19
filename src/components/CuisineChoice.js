import React from "react";
import { spicyFoods } from "../data";
import { useState } from "react";

function CuisineChoice() {
  const [cuisine, setCuisine] = useState("All");
  const [foods, setFoods] = useState(spicyFoods);
  const [show, setShow] = useState(true);
  console.log(spicyFoods);
  function selectHandle(e) {
    console.log(e.target.value);
    setCuisine(e.target.value);
    setShow(!show);
  }
  let filteredFood = foods.filter((food) => food.cuisine === cuisine);
  console.log(filteredFood);
  
// HOW THEY DONE IT 
//   const [foods, setFoods] = useState(spicyFoods);
// const [filterBy, setFilterBy] = useState("All");

// const foodsToDisplay = foods.filter((food) => {
//   if (filterBy === "All") {
//     return true;
//   } else {
//     return food.cuisine === filterBy;
//   }
// });

  return (
    <div className="select-div">
      <select onClick={selectHandle} className="select" name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <div className="foods">
        {cuisine === "All"
          ? foods.map((food) => {
              return <li key={food.id}>{food.name}</li>;
            })
          : filteredFood.map((food) => {
              return <li key={food.id}>{food.name}</li>;
            })}
      </div>
    </div>
  );
}

export default CuisineChoice;
