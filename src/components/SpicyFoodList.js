import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods((prev) => {
      return [...prev, newFood];
    });
  }
  console.log(foods);
  function removeFood(id) {
    console.log(id);
    const newState = [...foods];

    const filteredFoods = newState.filter((thidFood) => id != thidFood.id);
    console.log(filteredFoods);
    setFoods(filteredFoods);

    // //HOW THEY DID IT
    // function handleLiClick(id) {
    //   const newFoodArray = foods.map((food) => {
    //     if (food.id === id) {
    //       return {
    //         ...food,
    //         heatLevel: food.heatLevel + 1,
    //       };
    //     } else {
    //       return food;
    //     }
    //   });

    //HOW I DID IT
    const increaseFoodHeatLevel = newState.map((food) => {
      if (food.id == id) {
        food.heatLevel += 1;
        return food;
      } else {
        return food;
      }
    });
    console.log(increaseFoodHeatLevel[0]);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => removeFood(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
