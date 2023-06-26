import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import SiteListPage from './pages/SiteListPage';
import PlanLocation from './pages/PlanLocation';
import DetailPage from './pages/DetailPage';
import PlanPage from './pages/PlanPage';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/allList" exact element={<SiteListPage/>}/>
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/PlanLocation" exact element={<PlanLocation/>}/>
        <Route path="/detail/:id" exact element={<DetailPage/>}/>
    </Routes>
    );
}

export default App;
