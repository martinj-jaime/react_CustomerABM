import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeContainer/>} />
          <Route path='/customers' element={<HomeContainer/>} />
          {/* <Route path='/customers/:id' element={onRender()} />
          <Route path='/customers/:id/edit' element={onRender()} />
          <Route path='/customers/new' element={onRender()} /> */}
        </Routes>

      </Router>
    </>
  );
}

export default App;
