import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [basePlantList, setBasePlantList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [newPlantForm, setNewPlantForm] = useState({
    name: "",
    image: "",
    price: ""
  })


  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setBasePlantList(data))
     }
  , [])


  const currentPlantList = basePlantList.filter(plants => {
    return plants.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function addPlant(newPlant){
    fetch("http://localhost:6001/plants", {
      method:"POST", 
      headers: 
      {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    }).then(response => response.json())
    .then(data => console.log(data))
    setBasePlantList([...basePlantList, newPlant])

    console.log(newPlant)
  }

  return (
    <main>
      <NewPlantForm newPlantForm={newPlantForm} setNewPlantForm={setNewPlantForm} addPlant={addPlant}/>
      <Search />
      <PlantList currentPlantList={currentPlantList}/>
    </main>
  );
}

export default PlantPage;
