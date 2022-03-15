import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVideo from './components/AddVideo';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />




        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addvideo" element={<AddVideo />}/>
          <Route path="/editvideo/:id" element={<EditUser />}/>
           
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
