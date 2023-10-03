import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';
import CharacterDetails from "./pages/CharacterDetails";
import Favorites from "./pages/Favorites";
// import Home1 from "./pages/Search";


export default function App() {

  return (
    <div>
      <Nav />   
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/home" element={<Home1 />}/> */}
        <Route path="/about" element={<About />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/characterdetails/:symbol" element={<CharacterDetails />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  );
}
