import React, {useState, useEffect} from "react";

function Home({pantry, recipeList, setPantry}){
    const [pot, setPot] = useState([])
    const [dishes, setDishes] = useState([])
    console.log(pantry)
    // useEffect(()=>{
    //     // Pantries from DB
    //     fetch('http://localhost:3001/pantries').then((r) => {
    //         if (r.ok) {
    //         r.json().then((data) => setPantry(data))
    //         } else{
    //         r.json().then((data) => console.log(data))
    //         }
    //     })
    // }, [])

    // pantry display && potDisplay && dishesDisplay
    
    return <div className="comp-cont-1">
        <h1>Hi from Home</h1>
    </div>
}

export default Home