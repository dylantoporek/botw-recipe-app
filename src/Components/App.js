import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Store from '../Pages/Store';
import Cookbook from '../Pages/Cookbook';
import Home from '../Pages/Home';
import '../App.css';
import Login from './Login';
import Cart from '../Pages/Cart';
import About from '../Pages/About';

function App() {
  const [user, setUser] = useState(null);
  const [recipeList, setRecipeList] = useState([])
  const [ingredientList, setIngredientList] = useState([])
  const [cart, setCart] = useState([])
  const [pantries, setPantries] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)
  const [pinnedRecipe, setPinnedRecipe] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/api/v1/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else{
        r.json().then((data) => console.log(data))
      }
    });

    // ALL Ingredients
    fetch('/api/v1/ingredients').then((r) => {
      if (r.ok) {
        r.json().then((data) => setIngredientList(data))
      } else{
        r.json().then((data) => console.log(data))
      }
    })

    // All Recipes
    fetch('/api/v1/recipes').then((r) => {
      if (r.ok) {
        r.json().then((data) => setRecipeList(data))
      } else{
        r.json().then((data) => console.log(data))
      }
    })
    
  }, []);


  function changePage(str){
    setSelectedPage(str)
  }

  function changePinnedRecipe(obj){
    setPinnedRecipe(obj)
  }


  function checkPantryItems(item){
    let pantryCheck = pantries.filter((pantryItem)=> pantryItem.ingredient.id === item.id)
    if (pantryCheck.length === 0){

      let pantry = {
        ingredient_id: item.id,
        quantity: item.quantity
      }


      fetch('/api/v1/pantries', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({pantry}),
        }).then((r) => {
        if (r.ok) {
          r.json().then((data)=> console.log(data))
        } else {
          r.json().catch((data) => console.log(data))
        }
      });

    } if (pantryCheck.length === 1){

     let quantityUpdate = pantryCheck[0].quantity + item.quantity
     
     fetch(`/api/v1/pantries/${pantryCheck[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantityUpdate
      }),
      }).then((r) => {
      if (r.ok) {
        r.json().then((data)=> {
          let filteredPantry = pantries.filter((pantryItem)=> pantryItem.id !== data.id)
          let updatedPantry = [...filteredPantry, data]
          setPantries(updatedPantry)
        })
      } else {
        r.json().catch((data) => console.log(data))
      }
      });
    }
  }

  function addItemToCart(item){
    let cartCheck = cart.filter((cartItem)=> cartItem.id === item.id)
    if (cartCheck.length === 0){
      let newItem = {
        ...item,
      }
    let newCart = [...cart, newItem]
    setCart(newCart)
    } if (cartCheck.length === 1){
      let filteredCart = cart.filter((cartItem) => cartItem.id !== item.id)
      let updatedItem = {
        ...item,
        quantity: item.quantity + cartCheck[0].quantity
      }
      let newCart = [...filteredCart, updatedItem]
      setCart(newCart)
    }
  }

  function deleteItemFromCart(item){
    let newCart = cart.filter((inv) => inv.id !== item.id)
    setCart(newCart)
  }



  if (!user){
    return <Login onLogin={setUser} user={user} />;
  } else {
    return (
      <div id='app-contianer'>
        <Navbar user={user} setUser={setUser} selectedPage={selectedPage}/>
        <Routes>
          <Route path='/store' element={<Store ingredientList={ingredientList} addItemToCart={addItemToCart} changePage={changePage}/>}/>
          <Route path='/cookbook' element={<Cookbook recipeList={recipeList} changePage={changePage} changePinnedRecipe={changePinnedRecipe}/>}/>
          <Route path='/cart' element={<Cart user={user} cart={cart} setUser={setUser} setCart={setCart} deleteItemFromCart={deleteItemFromCart} checkPantryItems={checkPantryItems} changePage={changePage}/>}/>
          <Route path='/kitchen' element={<Home user={user} setUser={setUser} pantries={pantries} setPantries={setPantries} recipeList={recipeList} changePage={changePage} pinnedRecipe={pinnedRecipe}/>}/>
          <Route path='/'element={<About recipeList={recipeList} ingredientList={ingredientList} changePage={changePage}/>}/>
          
        </Routes>
      </div>
    );
  }
}

export default App;
