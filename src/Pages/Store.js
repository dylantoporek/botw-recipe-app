import React, {useState} from "react";
import Ingredient from "../Components/Ingredient";

function Store({ingredientList}){
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [nameFilter, setNameFilter] = useState("")

    const ingredientDisplay = ingredientList.map((ing)=>{
        return <Ingredient ing={ing}/>
    })

    return <div className="comp-cont-1">
            <h1>Hi From Store</h1>
            {ingredientDisplay}
        </div>
}

export default Store