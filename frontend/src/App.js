import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
    </Routes>
    );
}

export default App;
