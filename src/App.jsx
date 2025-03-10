import React from "react";
import './styles.css'
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from `react-router-dom`;
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  
  return (
    
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer greetings={"Autos BMW"} />} />
      <Route path='/category/categoryid/' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<About />} />
      <Route path='/item/:id' element={<Contact />} />
      <Route path='*' element={<Error />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
