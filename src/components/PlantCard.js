import React, {useState} from "react";

function PlantCard({plant}) {

  const [isInStock, setIsInStock] = useState(true)

  function stockToggle(){
    setIsInStock(isInStock => !isInStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={stockToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={stockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
