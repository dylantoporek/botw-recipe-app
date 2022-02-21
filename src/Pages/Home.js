import React, {useState, useEffect} from "react";
import Pantry from "../Components/Pantry";
import Dish from "../Components/Dish";
import Pot from "../Components/Pot";

function Home({pantry, recipeList, setPantry}){

    const [pot, setPot] = useState([])
    const [dishes, setDishes] = useState([])



    const pantryDisplay = pantry.length > 0 ? pantry.map((item)=> <Pantry key={item.ingredient.id} item={item} addItemToPot={addItemToPot}/>) : null
    const potDisplay = pot.length > 0 ? pot.map((item) => <Pot item={item} pot={pot} removeFromPot={removeFromPot}/>) : null
    
    function addItemToPot(item){
        if (pot.length < 5){
            let newPot = [...pot, item]
            let pantryItemUpdate = {
                ...item,
                quantity: item.quantity - 1
            }
            let filteredPantry = pantry.filter((pantryItem)=> pantryItem.ingredient.id !== item.ingredient.id)
            console.log(filteredPantry)
            // setPantry([...filteredPantry, pantryItemUpdate])
            setPot(newPot)
            
            // Update quantity in pantry (take one away)
        } if (pot.length === 5){
            alert("Pot already has 5 ingredients")
        }
        
    }

    function removeFromPot(item){
        let found = pot.find((ing)=> ing.id === item.id)
        let foundIndex = pot.indexOf(found)
        pot.splice(foundIndex, 1)
        let newPot = [...pot]
        setPot(newPot)
        // Update quantity in pantry (add one back in)
    }

    

    
    // useEffect(()=>{
    //     // Pantries from DB
    //     fetch('/pantries').then((r) => {
    //         if (r.ok) {
    //         r.json().then((data) => setPantry(data))
    //         } else{
    //         r.json().then((data) => console.log(data))
    //         }
    //     })
    // }, [])

    // pantry display && potDisplay && dishesDisplay
    return <div className="comp-cont-2">
    
            <h3>Ingredients</h3>
            <div id='pantry-items-cont'>
            {pantryDisplay}
            </div>

            <h3>Pot</h3>
            <div id='pot-items-cont'>
                {potDisplay}
            </div>
            
        
        
    </div>
}

export default Home