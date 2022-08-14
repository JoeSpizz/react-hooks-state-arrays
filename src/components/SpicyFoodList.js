import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilterBy] =useState("all")
  const foodsToDisplay = foods.filter((food) => {
    if (filter === "All") {
      return true;
    } else {
      return food.cuisine === filter;
    }
  });
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray= [...foods, newFood]
    setFoods(newFoodArray)
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map(e=>{
      if (e.id === id){
       return {...e, heatLevel: e.heatLevel+1}
      }
     else {return e}
    })
   setFoods(newFoodArray)
  }

 const foodList = foodsToDisplay.map((food) => (
  <li key={food.id} onClick={() => handleLiClick(food.id)}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));

const cuisineForm = <select onChange={cuisineSelection} name="filter">
<option value="All">All</option>
<option value="American">American</option>
<option value="Sichuan">Sichuan</option>
<option value="Thai">Thai</option>
<option value="Mexican">Mexican</option>
</select>

function cuisineSelection(cuisine){
  setFilterBy(cuisine.target.value)
}

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    {cuisineForm}
    </div>
  );
}

export default SpicyFoodList;
