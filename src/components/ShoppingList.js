import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  const [foods, setFood] = useState(items)
  console.log(foods)

  const foodToDisplay = foods.filter(obj => {
    if(selectedCategory === "All"){
      return true;
    } else{
      return obj.category === selectedCategory
    }
  })

  const foodList = foodToDisplay.map(obj => {
    return <Item key={obj.id} name={obj.name} category={obj.category} />
  })

  console.log(foodToDisplay)

  function handleEvent(e) {
    console.log(e.target.value)
    setCategory(e.target.value)

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleEvent} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;
