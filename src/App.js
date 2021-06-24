import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css'


import MainComponent from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
