import React from "react";

function NewPlantForm({newPlantForm, setNewPlantForm, addPlant}) {

  function changePlantForm(event){
    setNewPlantForm({...newPlantForm, [event.target.name]:event.target.value})
    // console.log(newPlantForm)
  }

  function handleSubmit(event){
    event.preventDefault()
    addPlant(newPlantForm)
    setNewPlantForm(
      {
        name: "",
        image: "",
        price: ""
      }
    )
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(event)=> changePlantForm(event)} type="text" name="name" placeholder="Plant name" value={newPlantForm.name}/>
        <input onChange={(event)=> changePlantForm(event)} type="text" name="image" placeholder="Image URL" value={newPlantForm.image}/>
        <input onChange={(event)=> changePlantForm(event)} type="number" name="price" step="0.01" placeholder="Price" value={newPlantForm.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
