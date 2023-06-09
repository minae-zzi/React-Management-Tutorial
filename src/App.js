import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css'

const App = () => {
  return(
    <div className='app'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/counter">counter</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/counter" element={<Counter></Counter>}></Route>
      </Routes>
    </div>
  )
 
}

export default App;
