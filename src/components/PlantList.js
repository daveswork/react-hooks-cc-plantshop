import React from "react";
import PlantCard from "./PlantCard";

function PlantList({currentPlantList}) {

  const plantCards = currentPlantList.map((plant, index) => {
    return <PlantCard key={index} plant={plant}/>
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
