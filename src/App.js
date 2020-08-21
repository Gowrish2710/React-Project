import React from 'react';
import MainContent from './ChildOne';
import Footer from './ChildTwo';
import './App.css';

function App() {
  return (
    <div>
      <h1 className = "App-header">Hello React From Parent</h1>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
