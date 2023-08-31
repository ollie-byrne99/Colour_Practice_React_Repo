import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/colours" element={<Pages.Colour />} />
        <Route path="/colours/:color" element={<Pages.ColourDetail />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
