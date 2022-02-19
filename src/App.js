import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeContainer/>} />
          <Route path='/customers' element={<CustomersContainer/>} />
          {/* <Route path='/customers/:id' element={onRender()} />
          <Route path='/customers/:id/edit' element={onRender()} />
          <Route path='/customers/new' element={onRender()} /> */}
          <Route path='*' element={<HomeContainer/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
