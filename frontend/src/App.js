import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import Details from './Details';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-5xl font-extrabold mt-12 mb-6">Global Tek Med - Test App</h1>
        <h2 className="text-xl font-bold mb-12">by Victor Sandoval</h2>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieHref" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;