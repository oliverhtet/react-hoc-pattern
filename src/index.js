import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import FlagListElement from './FlagListElement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
      <h1> 
       Country List
      </h1>
      <FlagListElement />
    </div>
);


