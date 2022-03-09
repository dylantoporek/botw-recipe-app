import React from "react";
import tabletop from '../Images/tabletop.png'
import rupee from '../Images/rupee.png'

function Dish({item, sellRecipe, user, setUser}){
    
    let priceRewrite = item.recipe.price
    if (priceRewrite === 0){
        priceRewrite = 25
    }

    function handleSellItem(){
        let newBankStatement = user.bank + priceRewrite
        sellRecipe(item)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              bank: newBankStatement
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((data)=> {
                setUser({
                  ...user,
                  bank: data.bank
                })
              })
            } else {
              r.json().catch((data) => console.log(data))
            }
        });

    }

    const rupeeDisplay = <img id='dish-rupee' src={rupee}/>

    let itemDisplay = <div id='dish'>
        <p id='dish-name'>{item.recipe.name}</p>
        <img id='dish-img' src={item.recipe.image}/>
        <p id='dish-value'>{rupeeDisplay} {priceRewrite}</p>
        <button id='sell-dish' onClick={handleSellItem}>Sell</button>
        <img id='dish-background' src={tabletop}/>
    </div>

    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Dish