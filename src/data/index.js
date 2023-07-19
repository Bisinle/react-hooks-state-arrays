const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
  {id:30, name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  {id:40, name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  {id:50,name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
  {id:60, name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  {id:70, name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  {id:80, name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 }
];

let nextId = 3;

const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

// Get one random spicy food from the array
function getNewRandomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;

  return newSpicyFood;
}

export { spicyFoods, getNewRandomSpicyFood };
