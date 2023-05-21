import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import SiteListPage from './pages/SiteListPage';
import PlanLocation from './pages/PlanLocation';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/allList" exact element={<SiteListPage/>}/>
        <Route path="/PlanLocation" exact element={<PlanLocation/>}/>
    </Routes>
    );
}

export default App;
