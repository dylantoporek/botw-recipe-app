import React, {useState} from "react";
import backgroundHover from "../Images/backgroundHover.png"
import backgroundNoHover from "../Images/backgroundNoHover.png"

function Ingredient({ing, setTogDetails, setSpecificIng}){
    const [isShown, setIsShown] = useState(false)

    function putInCart(){ 
        setSpecificIng(ing)
        setTogDetails(true)
    }

    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div 
                onMouseEnter={()=> setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)}
                onClick={putInCart} className='ingredient'>
            <p className="ing-name">{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <img className='ing-background-noH' src={backgroundNoHover}/>
        </div>
    }

    if (isShown){
        ingDisplay = <div 
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}
            onClick={putInCart} className='ingredient'>
            <p className="ing-name">{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <img className='ing-background-H' src={backgroundHover}/>
        </div>
    }

    return (
        <div>{ingDisplay}</div>
    )
    
}

export default Ingredient