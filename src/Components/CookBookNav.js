import React from "react";


function CookBookNav({name, category, typeFilter, setNameFilter, setCategoryFilter, setTypeFilter}){

    function handleSearchByName(e){
        setNameFilter(e.target.value)
    }

    function handleFilterChange(e){
        setCategoryFilter(e.target.value)
    }

    function handleTypeChange(e){
        setTypeFilter(e.target.value)
    }


    return (
        <div id='cookbook-nav'>
            <input id='search-by-name' placeholder='Search' type="text" value={name} onChange={handleSearchByName}></input>
            <select id='search-by-type' value={typeFilter} onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value="Fruit">Fruit</option>
                <option value="Mushroom">Mushroom</option>
                <option value="Meat">Meat</option>
                <option value='Seafood'>Seafood</option>
                <option value="Veggie">Vegetarian</option>
                <option value="Curry">Curry</option>
                <option value='Cake'>Cake</option>
                <option value='Pie'>Pie</option>
            </select>
            <select id='search-by-category' value={category} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Restore Hearts">Restores Hearts</option>
                <option value="Restore Stamina">Restores Stamina</option>
                <option value="Movement Speed">Movement Speed</option>
                <option value="Stealth">Stealth</option>
                <option value="Defense Boost">Defense Boost</option>
                <option value="Attack Power">Attack Power</option>
                <option value="Temporary Max Hearts">Max Hearts</option>
                <option value="Heat Resist">Heat Resistance</option>
                <option value="Cold Resist">Cold Resistance</option>
                <option value="Electric Resist">Electric Resistance</option>
            </select>
            
            
        </div>
    )
}

export default CookBookNav