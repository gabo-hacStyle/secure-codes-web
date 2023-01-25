import React from 'react';
import { ClassState } from './ClassState';
import { UseState } from './UseState';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <UseState name="Use State"/>
       <ClassState name="ClassState"/> 
      </div>
    </React.Fragment>
  );
}

export default App;
