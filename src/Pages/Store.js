import React, {useState, useEffect} from "react";
import Ingredient from "../Components/Ingredient";
import StoreNav from "../Components/StoreNav";
import Details from "../Components/Details";



function Store({ingredientList, addItemToCart, changePage}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")
    const [togDetails, setTogDetails] = useState(false)
    const [specificIng, setSpecificIng] = useState(null)

    useEffect(()=>{
        changePage(window.location.href)
    }, [])

    
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
        return <Ingredient key={ing.id} ing={ing} setTogDetails={setTogDetails} setSpecificIng={setSpecificIng}/>
    })

    const detailsDisplay = specificIng ? <Details addItemToCart={addItemToCart} setTogDetails={setTogDetails} ing={specificIng}/> : null
    
    
    if(!togDetails){
        return <div id='page-background'>
<div className="store-comp-cont-1">
        <StoreNav 
            name={nameFilter} 
            category={categoryFilter} 
            setCategoryFilter={setCategoryFilter}
            setNameFilter={setNameFilter}
        />
        {ingredientDisplay}
    </div>
        </div>
        
    } else{
        return <div id='page-background'>

<div className="store-comp-cont-1">
        <StoreNav 
            name={nameFilter} 
            category={categoryFilter} 
            setCategoryFilter={setCategoryFilter}
            setNameFilter={setNameFilter}
        />
        {detailsDisplay}
        {ingredientDisplay}
        
    </div>
        </div>
        
    }
    
}

export default Store