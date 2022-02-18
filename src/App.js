import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/customers'>Customers</Link>
        <Link to='/customers/30000000'>Customers</Link>
      </Router>
    </div>
  );
}

export default App;
