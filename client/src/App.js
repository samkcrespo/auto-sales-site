import logo from './logo.svg';
import * as React from "react";
import './App.css';
import {useState, useEffect} from "react";
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";
import ProductsContainer from './components/ProductsContainer';
import { Route, Routes } from "react-router-dom";

function App() {
  const appliedTheme = createTheme(theme);
  const [products, setProducts] = useState([]);
  

  // const URL = ('http://localhost:4000/products')
  // useEffect(() => { 
  //     fetch(URL)
  //     .then(r => r.json())
  //     .then(data => setProducts(data))         
  // }, []);

  return (
    <div className="App">
       <ThemeProvider theme={appliedTheme} />
       
     <Nav />
    <Routes>
    <Route
              index
              path="/"
              element={
                <Home
                />
              }
            />
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
