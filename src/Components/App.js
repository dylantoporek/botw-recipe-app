import React from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Store from '../Pages/Store';
import Cookbook from '../Pages/Cookbook';
import Home from '../Pages/Home';
import '../App.css';


function App() {
  return (
    <div id='app-contianer'>
      <Navbar/>
      <Routes>
        <Route path='/store' element={<Store/>}/>
        <Route path='/cookbook' element={<Cookbook/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
