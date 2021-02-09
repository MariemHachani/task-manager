import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Projectdetails from './components/Projectdetails';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="container">
      <Projectdetails></Projectdetails>
      <Filter></Filter>
      <br></br>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
