import logo from './logo.svg';
import * as React from "react";
import './App.css';
import {useState, useEffect} from "react";
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";
import ProductsContainer from './components/ProductsContainer';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const appliedTheme = createTheme(theme);
  const [products, setProducts] = useState([]);
  const [sessionCheck, setSessionCheck] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    handleCheckUser();
    console.log(user)
  }, []);

  function handleCheckUser() {
    fetch("http://localhost:4000/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // include authentication header here if necessary
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            if (user) {
              setUser(user);
            }
          });
        } else {
          response.text().then((text) => {
            console.log(text.length ? JSON.parse(text) : {});
          });
        }
      })
      .finally(() => {
        setSessionCheck(true);
      });
  }
  

  // function handleLogout() {
  //   fetch("/logout", { method: "DELETE" }).then((res) => {
  //     if (res.ok) {
  //       setUser(null);
  //     }
  //     navigate("/");
  //   });
  // }
  

  const URL = ('http://localhost:4000/products')
  useEffect(() => { 
      fetch(URL)
      .then(r => r.json())
      .then(products => setProducts(products))         
  }, []);
  console.log(products)

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
            <Route path="/about" element={<About/>} />
            {/* <Route path="/products" element={<ProductsContainer products={products}/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            {/* <Route
              path="signup"
              element={
                <Signup onLogin={setUser} onLogout={handleLogout} user={user} />
              }
            /> */}
            <Route
              path="login"
              element={
                <Login setUser={setUser} />
              }
            />
           
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
