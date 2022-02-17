import React, {useState} from "react";
import Ingredient from "../Components/Ingredient";
import StoreNav from "../Components/StoreNav";


function Store({ingredientList}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")


    const filteredByCategory = ingredientList.filter((ing)=>{
        if (categoryFilter === "All"){
            return ing
        }
        if (categoryFilter !== "All"){
            return ing.category === categoryFilter
        }
    })

    const filteredByName = filteredByCategory.filter((ing)=>{
        if (nameFilter === ""){
            return ing
        }
        if (nameFilter !== ""){
            return ing.name ? ing.name.toLowerCase().includes(nameFilter.toLowerCase()) : null
        }
    })

    const ingredientDisplay = filteredByName.map((ing)=>{
        return <Ingredient key={ing.id} ing={ing}/>
    })

    return <div className="comp-cont-1">
            <StoreNav 
                name={nameFilter} 
                category={categoryFilter} 
                setCategoryFilter={setCategoryFilter}
                setNameFilter={setNameFilter}
            />
            {ingredientDisplay}
        </div>
}

export default Store