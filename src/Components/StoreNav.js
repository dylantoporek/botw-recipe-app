import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function StoreNav({name, category, setNameFilter, setCategoryFilter}){

    const navigate = useNavigate()
    function handleSearchByName(e){
        setNameFilter(e.target.value)
    }

    function handleFilterChange(e){
        setCategoryFilter(e.target.value)
    }

    

    return (
        <div id='store-nav'>
            <input id='search-by-name' type="text" value={name} onChange={handleSearchByName}></input>
            <select id='search-by-category' value={category} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Fruit">Fruits</option>
                <option value="Vegetable">Vegetables</option>
                <option value="Mushroom">Mushrooms</option>
                <option value="Herb">Herbs</option>
                <option value="Fish">Fish</option>
                <option value="Red Meat">Meat</option>
                <option value="Poultry">Poultry</option>
                <option value="Misc">Misc</option>
                <option value="Crab">Crabs</option>
                <option value="Snail">Snails</option>
            </select>
            
        </div>
    )
}

export default StoreNav