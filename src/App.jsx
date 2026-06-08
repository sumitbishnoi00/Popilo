import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Popilo from './components/view/Popilo'
import Topic from "./components/view/Topic";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import './App.css'
import Cards from "./components/popilo/Cards";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Popilo />} />

          <Route path="/blog" element={<Cards />} />

          <Route path="/topic/:cardName" element={<Topic />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
