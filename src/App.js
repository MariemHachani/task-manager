import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Projectdetails from './components/Projectdetails';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App">
      <Projectdetails></Projectdetails>
      <Filter></Filter>
      <Tasks></Tasks>

    </div>
  );
}

export default App;
