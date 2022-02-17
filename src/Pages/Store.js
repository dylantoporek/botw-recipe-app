import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Ingredient from "../Components/Ingredient";
import StoreNav from "../Components/StoreNav";


function Store({ingredientList, addItemToCart}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")

    const navigate = useNavigate()


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
        return <Ingredient key={ing.id} ing={ing} addItemToCart={addItemToCart}/>
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