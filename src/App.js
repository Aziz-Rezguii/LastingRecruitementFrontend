import React from 'react'
import {Routes,Route } from 'react-router-dom';
import DashBoard from './components/dashboard'
import Main from './main'
import Apply from './components/Apply'
import MoreInfo from './components/MoreInfo'
import Register from './components/Register'
import AfterSubmit from './components/AfterSubmit'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path="/Apply"element={<Apply />}/>
        <Route path="/MoreInfo_:id" element={<MoreInfo />}/>
        <Route path="/Register_:id"element={<Register />}/>
        <Route path="/AfterSubmit"element={<AfterSubmit />}/>
      </Routes>
    </div>
  );
}

export default App;
