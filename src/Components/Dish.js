import React from "react";

function Dish({item, sellRecipe, user, setUser}){
    
    let priceRewrite = item.price
    if (priceRewrite === 0){
        priceRewrite = 25
    }

    function handleSellItem(){
        let newBankStatement = user.bank + priceRewrite
        sellRecipe(item)
       setUser({
           ...user,
           bank: newBankStatement
       }) 
    }

    let itemDisplay = <div>
        <p>{item.name}</p>
        <img src={item.image}/>
        <p>Value: {priceRewrite}</p>
        <button onClick={handleSellItem}>Sell</button>
    </div>
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Dish