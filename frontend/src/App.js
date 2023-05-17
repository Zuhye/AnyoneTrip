import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import PlanPage from './pages/PlanPage';

function App() {

  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/plan" element={<PlanPage />} />
    </Routes>
    );
}

export default App;
