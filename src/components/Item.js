import React, {useState} from "react";


function Item({ name, category }) {
  const [addedToCart, setCart] = useState(false)

  function handleClick(e){
    setCart((addedToCart) => !addedToCart)
  }

  return (
    <li className={addedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addedToCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
