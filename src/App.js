import './App.css';
import {Home} from "./Components/Home";
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {ShoppingPage} from "./Components/ShoppingPage"


function App() {
  return <div className="App"> 
  
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoppingpage" element={<ShoppingPage />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

      
    </Routes>
  </Router>
    
    </div>;

}



export default App;
