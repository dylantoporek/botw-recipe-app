import React from "react";

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

    let itemDisplay = <div>
        <p>{item.recipe.name}</p>
        <img src={item.recipe.image}/>
        <p>Value: {priceRewrite}</p>
        <button onClick={handleSellItem}>Sell</button>
    </div>
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Dish