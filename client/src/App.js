import logo from './logo.svg';
import * as React from "react";
import './App.css';
import {useState, useEffect} from "react";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductsContainer from './components/ProductsContainer';
import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
       <header className="App-header">JDM AUTO IMPORTS
      </header>
    </div>
  );
}

export default App;
