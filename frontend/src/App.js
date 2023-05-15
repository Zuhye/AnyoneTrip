import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import SiteListPage from './pages/SiteListPage';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/allList" exact element={<SiteListPage/>}/>
    </Routes>
    );
}

export default App;
