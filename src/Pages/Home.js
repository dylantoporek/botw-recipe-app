import React, {useState, useEffect} from "react";

function Home({setPantry}){
    const [dishes, setDishes] = useState([])

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
    
    return <div className="comp-cont-1">
        <h1>Hi from Home</h1>
    </div>
}

export default Home