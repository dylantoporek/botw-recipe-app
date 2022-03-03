import React, {useState} from "react";
import CookBookNav from "../Components/CookBookNav";
import Recipe from "../Components/Recipe"
import CookBookDetails from "../Components/CookBookDetails";

function Cookbook({recipeList}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("All")
    const [togDetails, setTogDetails] = useState(false)
    const [specificRecipe, setSpecificRecipe] = useState(null)

    const filteredByCategory = recipeList.filter((recipe)=>{
        if (categoryFilter === "All" && recipe.category !== 'Elixer' && !recipe.name.includes('Monster')){
            return recipe
        }
        if (categoryFilter !== "All" && recipe.category !== 'Elixer'){
            return recipe.category === categoryFilter
        }
    })

    const filteredByType = filteredByCategory.filter((recipe)=>{
        if (typeFilter === 'All'){
            return recipe
        }
        if(typeFilter !== "All"){
            return recipe.name.includes(typeFilter)
        }
    })

    const filteredByName = filteredByType.filter((recipe)=>{
        if (nameFilter === ""){
            return recipe
        }
        if (nameFilter !== ""){
            return recipe.name ? recipe.name.toLowerCase().includes(nameFilter.toLowerCase()) : null
        }
    })

    const recipeDisplay = filteredByName.map((recipe)=>{
        return <Recipe key={recipe.id} recipe={recipe} setTogDetails={setTogDetails} setSpecificRecipe={setSpecificRecipe}/> 
    })

    const detailsDisplay = specificRecipe ? <CookBookDetails recipe={specificRecipe} setTogDetails={setTogDetails}/> : null

    if (!togDetails){
        return <div className="comp-cont-1">
        <CookBookNav 
            name={nameFilter}
            category={categoryFilter}
            typeFilter={typeFilter}
            setCategoryFilter={setCategoryFilter}
            setNameFilter={setNameFilter} 
            setTypeFilter={setTypeFilter}
        />
        {recipeDisplay}
    </div>
    } if(togDetails){
        return <div className="comp-cont-1">
        <CookBookNav 
            name={nameFilter}
            category={categoryFilter}
            typeFilter={typeFilter}
            setCategoryFilter={setCategoryFilter}
            setNameFilter={setNameFilter} 
            setTypeFilter={setTypeFilter}
        />
        {detailsDisplay}
        {recipeDisplay}
    </div>
    } 
    
}

export default Cookbook