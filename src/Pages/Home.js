import React, {useState, useEffect} from "react";
import Pantry from "../Components/Pantry";
import Dish from "../Components/Dish";
import Pot from "../Components/Pot";


function Home({pantries, recipeList, setPantries, user, setUser}){

    const [pot, setPot] = useState([])
    const [dishes, setDishes] = useState([])

    useEffect(()=>{
        // Pantries from DB
        fetch('/pantries').then((r) => {
            if (r.ok) {
            r.json().then((data) => setPantries(data))
            } else{
            r.json().then((data) => console.log(data))
            }
        })

        fetch('/dishes').then((r) => {
            if (r.ok) {
            r.json().then((data) => setDishes(data))
            } else{
            r.json().then((data) => console.log(data))
            }
        })

    }, [])

    const pantryDisplay = pantries.length > 0 ? pantries.map((item)=>{
       return <Pantry 
            key={item.ingredient.id}
            pot={pot} 
            item={item}
            removeFromPot={removeFromPot} 
            addItemToPot={addItemToPot}/>
    }) : null

    const potDisplay = pot.length > 0 ? pot.map((item) =>{
       return <Pot 
            item={item} 
            pot={pot} 
            startCookingProcess={startCookingProcess}/>
    }) : null

    const dishDisplay = dishes.length > 0 ? dishes.map((item)=> {
       return <Dish 
            item={item} 
            sellRecipe={sellRecipe} 
            user={user} 
            setUser={setUser}/>
    }) : null

    

    function addItemToPot(item, num){
        if (pot.length < 5){
            let quantityUpdate = num - 1
            fetch(`/pantries/${item.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  quantity: quantityUpdate
                }),
                }).then((r) => {
                if (r.ok) {
                  r.json().then((data)=> {
                    let filteredPantry = pantries.filter((pantryItem)=> pantryItem.id !== data.id)
                    let updatedPantry = [...filteredPantry, data]
                    setPantries(updatedPantry)
                  })
                } else {
                  r.json().catch((data) => console.log(data))
                }
              });
            let newPot = [...pot, item]
            setPot(newPot)
        } 
    }

    function removeFromPot(item, num){
       
        let found = pot.find((ing)=> ing.ingredient.id === item.ingredient.id)
        
        let foundIndex = pot.indexOf(found)
        
        pot.splice(foundIndex, 1)
        let quantityUpdate = num + 1
            fetch(`/pantries/${item.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  quantity: quantityUpdate
                }),
                }).then((r) => {
                if (r.ok) {
                  r.json().then((data)=> {
                    let filteredPantry = pantries.filter((pantryItem)=> pantryItem.id !== data.id)
                    let updatedPantry = [...filteredPantry, data]
                    setPantries(updatedPantry)
                  })
                } else {
                  r.json().catch((data) => console.log(data))
                }
              });
        let newPot = [...pot]
        setPot(newPot)
    }

    
    function startCookingProcess(){
        let foundRecipe
        let recipeIngredientList = recipeList.map((recipe)=>{
            return {
                id: recipe.id,
                ingredients: [recipe.ingredient1, recipe.ingredient2, recipe.ingredient3, recipe.ingredient4, recipe.ingredient5],
            }
        })
        let formula = []
        let potIngredients = pot.map((item)=> item.ingredient.name)
        console.log(potIngredients)
        potIngredients.forEach((str)=>{
            let checkX2 = str + ' x2'
            let checkX3 = str + ' x3'
            let checkX4 = str + ' x4'
            if (!formula.includes(str) && !formula.includes(checkX2) && !formula.includes(checkX3) && !formula.includes(checkX4)){
                return formula.push(str)
                
            }
            if (formula.includes(str)){
                let newStr = str + ' x2'
                return formula.splice(formula.indexOf(str), 1, newStr, null)
             
            }
            
            if (formula.includes(checkX2)){
                let newStr = str + ' x3'
                return formula.splice(formula.indexOf(checkX2), 1, newStr, null)
            }

            if (formula.includes(checkX3)){
                let newStr = str + ' x4'
                return formula.splice(formula.indexOf(checkX3), 1, newStr, null)
            }
            
            if (formula.includes(checkX4)){
                let newStr = str + ' x5'
                return formula.splice(formula.indexOf(checkX4), 1, newStr, null)
            }
        })

        if (formula.length < 5){
            let formulaFiller = 5 - formula.length
            for (let i=0; i< formulaFiller; i++){
                formula.push(null)
            }
        }
        console.log(formula)
        recipeIngredientList.map((recipe)=> {
            
            if (recipe.ingredients.includes(formula[0]) && formula.includes(recipe.ingredients[0])){  
                if(recipe.ingredients.includes(formula[1]) && formula.includes(recipe.ingredients[1])){
                    if(recipe.ingredients.includes(formula[2]) && formula.includes(recipe.ingredients[2])){
                        if(recipe.ingredients.includes(formula[3]) && formula.includes(recipe.ingredients[3])){
                            if(recipe.ingredients.includes(formula[4] && formula.includes(recipe.ingredients[4]))){
                                foundRecipe = recipe
                                console.log(foundRecipe)
                            }
                        }
                    }
                }
            } 
        })
        if (foundRecipe !== undefined){
            let targetedRecipe = recipeList.find((recipe)=> recipe.id === foundRecipe.id)
            let dish = {
                recipe_id: foundRecipe.id,
                quantity: 1
            }
            fetch('/dishes', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({dish}),
                }).then((r) => {
                if (r.ok) {
                  r.json().then((data)=> {
                    let newDishArr = [...dishes, data]
                    setDishes(newDishArr)
                  })
                } else {
                  r.json().catch((data) => console.log(data))
                }
              });
              pantries.forEach((pantryItem)=>{
                  if(pantryItem.quantity === 0){
                    fetch(`/pantries/${pantryItem.id}`, {
                        method: 'DELETE',
                      })
                      .then((res) => {
                        if (res.ok) {
                          console.log("file deleted")
                        } else {
                          res.json().then((data)=> console.log(data))
                        }
                      })
                  }
              })
            setPot([])
        } else {
            alert('That mix is not edible!')
            setPot([])
        }
            
    }

    function sellRecipe(item){
        let found = dishes.find((dish)=> dish.id === item.id)
        let foundIndex = dishes.indexOf(found)
        dishes.splice(foundIndex, 1)
        let newDishArr = [...dishes]
        setDishes(newDishArr)
        fetch(`/dishes/${item.id}`, {
            method: 'DELETE',
          })
          .then((res) => {
            if (res.ok) {
              console.log("file deleted")
            } else {
              res.json().then((data)=> console.log(data))
            }
          })
    }
    
    
    // pantry display && potDisplay && dishesDisplay
    return <div className="comp-cont-2">
    
            <h3>Ingredients</h3>
            <div id='pantry-items-cont'>
                {pantryDisplay}
            </div>

            <h3>Pot</h3>
            <div id='pot-items-cont'>
                {potDisplay}
                <button onClick={startCookingProcess}>Cook</button>
            </div>

            <h3>Dishes</h3>
            <div>
                {dishDisplay}
            </div>  
    </div>
}

export default Home