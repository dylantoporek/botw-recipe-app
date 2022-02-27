import React, {useState} from "react";
import backgroundNoHover from "../Images/backgroundNoHover.png"
import darkPantry from '../Images/darkPantry.png'


function Pantry({item, pot, addItemToPot, removeFromPot}){
    const [quantity, setQuantity] = useState(item.quantity)
    

    function addToPot(){
        if (quantity > 0 && pot.length < 5){
            addItemToPot(item, quantity)
            let newQuantity = quantity - 1
            setQuantity(newQuantity)
        } if(quantity === 0){
            alert(`You are out of ${item.ingredient.name}. Go buy more from the store.`)
        } if (pot.length === 5){
            alert('Pot already full')
        }
        
    }

    function handleRemoveFromPot(){
       let potCheck 
        potCheck = pot.find((ing)=> ing.id === item.id)
        
        if(potCheck !== undefined){
            removeFromPot(item, quantity)
            let newQuantity = quantity + 1
            setQuantity(newQuantity)
        } else {
            alert('nothing to remove from pot')
        }
        
    }
    
    let itemDisplay
    if(item.ingredient.name !== null){
        itemDisplay = <div id='pantry-item'>
            
                <p className="pantry-name">{item.ingredient.name}</p>
                <p className='pantry-quantity'>x{quantity}</p>
                <button id='adder' onClick={addToPot}>add to pot</button>
                <button id='minuser' onClick={handleRemoveFromPot}>remove from pot</button>
            
            
                <img className="pantry-img" src={item.ingredient.image}/>
                <img className='pantry-background' src={darkPantry}/>
            
            
            
            
        </div>
    }
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Pantry