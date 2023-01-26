import React from 'react';
import { UseReducer } from './UseReducer';
import { UseState } from './UseState';
import { ClassState } from './ClassState';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <UseState name="Use State"/>
        <UseReducer name="Use Reducer"/> 
        <ClassState name="Class State"/>
      </div>
    </React.Fragment>
  );
}

export default App;
