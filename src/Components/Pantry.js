import React, {useState} from "react";
import darkPantry from '../Images/darkPantry.png'


function Pantry({item, pot, addItemToPot, removeFromPot}){
    const [quantity, setQuantity] = useState(item.quantity)
    const [addShow, setAddShow] = useState(false)
    const [minusShow, setMinusShow] = useState(false)

    

    function addToPot(){
        if (quantity > 0 && pot.length < 5){
            addItemToPot(item, quantity)
            let newQuantity = quantity - 1
            setQuantity(newQuantity)
        } if(quantity === 0){
            alert(`You are out of ${item.ingredient.name}. You can purchase more from the store.`)
        } if (pot.length === 5){
            alert('The pot can only hold 5 ingredients.')
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
            console.log(item)
            alert(`There is no ${item.ingredient.name} in the pot.`)
        }
        
    }
    
    let itemDisplay
    if(item.ingredient.name !== null){
        itemDisplay = <div id='pantry-item'>
                <p className="pantry-name">{item.ingredient.name}</p>
                <p className='pantry-quantity'>x{quantity}</p>

                {addShow ? 
                <button id='adder' onClick={addToPot}
                    style={{backgroundColor: 'gainsboro'}}
                    onMouseEnter={()=> setAddShow(true)}
                    onMouseLeave={()=> setAddShow(false)}>
                    +
                </button>
                :
                <button id='adder' onClick={addToPot}
                    onMouseEnter={()=> setAddShow(true)}
                    onMouseLeave={()=> setAddShow(false)}>
                    +
                </button>}
                
                {minusShow ? 
                <button id='minuser' onClick={handleRemoveFromPot}
                    style={{backgroundColor: 'gainsboro'}}
                    onMouseEnter={()=> setMinusShow(true)}
                    onMouseLeave={()=> setMinusShow(false)}>
                    -
                </button>
                :
                <button id='minuser' onClick={handleRemoveFromPot}
                    onMouseEnter={()=> setMinusShow(true)}
                    onMouseLeave={()=> setMinusShow(false)}>
                    -
                </button>}
                
                


                <img className="pantry-img" src={item.ingredient.image}/>
                <img className='pantry-background' src={darkPantry}/>
        </div>
    }
    return <div>{itemDisplay}</div>
}

export default Pantry