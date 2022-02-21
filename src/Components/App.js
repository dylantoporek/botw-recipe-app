import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Store from '../Pages/Store';
import Cookbook from '../Pages/Cookbook';
import Home from '../Pages/Home';
import '../App.css';
import Login from './Login';
import Cart from '../Pages/Cart';


function App() {
  const [user, setUser] = useState(null);
  const [recipeList, setRecipeList] = useState([])
  const [ingredientList, setIngredientList] = useState([])
  const [cart, setCart] = useState([])
  const [pantry, setPantry] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else{
        r.json().then((data) => console.log(data))
      }
    });

    // ALL Ingredients
    fetch('http://localhost:3001/ingredients').then((r) => {
      if (r.ok) {
        r.json().then((data) => setIngredientList(data))
      } else{
        r.json().then((data) => console.log(data))
      }
    })

    // All Recipes
    fetch('http://localhost:3001/recipes').then((r) => {
      if (r.ok) {
        r.json().then((data) => setRecipeList(data))
      } else{
        r.json().then((data) => console.log(data))
      }
    })
    
  }, []);

  function addItemToPantry(item){
    let pantryCheck = pantry.filter((pantryItem)=> pantryItem.id === item.id)
    if (pantryCheck.length === 0){
      let newItem = {
        ...item
      }
      // POST FOR NEW PANTRY
      let newPantry = [...pantry, newItem]
      setPantry(newPantry)
    } if (pantryCheck.length === 1){
     
      let filteredPantry = pantry.filter((pantryItem)=> pantryItem.id !== item.id)
      let updatedItem = {
        ...item,
        quantity: item.quantity + pantryCheck[0].quantity
      }
      // UPDATE FOR PANTRY ITEM
      let newPantry = [...filteredPantry, updatedItem]
      setPantry(newPantry)
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
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/store' element={<Store ingredientList={ingredientList} addItemToCart={addItemToCart}/>}/>
          <Route path='/cookbook' element={<Cookbook recipeList={recipeList}/>}/>
          <Route path='/cart' element={<Cart user={user} cart={cart} setCart={setCart} deleteItemFromCart={deleteItemFromCart} pantry={pantry} addItemToPantry={addItemToPantry}/>}/>
          <Route path='/' element={<Home pantry={pantry} setPantry={setPantry} recipeList={recipeList}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
