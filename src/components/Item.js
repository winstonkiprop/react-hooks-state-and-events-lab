//import React from "react";
import React, {useState} from "react";
function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemsClass= inCart? "in-cart": "";
  const addRemove=inCart? "Add to Cart" :"Remove From Cart";

  function handleClick (){
    setInCart(!inCart)
  }
  return (
    <li className={itemsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addRemove} onClick={handleClick}>{inCart? "Add to Cart" :"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
