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
  const [pantry, setPantry] = useState([])
  const [cart, setCart] = useState([])

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

  function addItemToCart(item){
    if (!cart.includes(item)){
      let newItem = {
        ...item,
        quantity: 1
      }
    let newCart = [...cart, newItem]
    setCart(newCart)
    } if (cart.includes(item)){
      let filteredCart = cart.filter((thing) => thing.id !== item.id)
      let updatedItem = {
        ...item,
        quantity: item.quantity + 1
      }
      let newCart = [...filteredCart, updatedItem]
      setCart(newCart)
    }
  }

  function deleteItemFromCart(item){
    let newCart = cart.filter((inv) => inv.id !== item.id)
    setCart(newCart)
  }

  console.log(cart)

  if (!user){
    return <Login onLogin={setUser} user={user} />;
  } else {
    return (
      <div id='app-contianer'>
        <Navbar setUser={setUser}/>
        <Routes>
          <Route path='/store' element={<Store ingredientList={ingredientList} addItemToCart={addItemToCart}/>}/>
          <Route path='/cookbook' element={<Cookbook recipeList={recipeList}/>}/>
          <Route path='/cart' element={<Cart cart={cart} deleteItemFromCart={deleteItemFromCart}/>}/>
          <Route path='/' element={<Home setPantry={setPantry}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
