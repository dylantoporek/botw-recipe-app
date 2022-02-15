import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Store from '../Pages/Store';
import Cookbook from '../Pages/Cookbook';
import Home from '../Pages/Home';
import '../App.css';
import Login from './Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else{
        r.json().then((data)=> console.log(data))
      }
    });
    
  }, []);

  if (!user){
    return <Login onLogin={setUser} user={user} />;
  } else {
    return (
      <div id='app-contianer'>
        <Navbar setUser={setUser}/>
        <Routes>
          <Route path='/store' element={<Store/>}/>
          <Route path='/cookbook' element={<Cookbook/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
