import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";

import { Suspense } from "react";
const App = () => {
    const About = React.lazy(()=> import('./pages/About'))
    return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<Suspense fallback={<div className="flex-1 h-screen justify-center flex items-center"><div className="w-[80%] m-auto loader  "></div></div>}><About/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;