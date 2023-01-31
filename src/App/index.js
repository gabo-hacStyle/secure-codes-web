import React from 'react';
import { UseReducer } from '../SecureCodes/UseReducer';
import { UseState } from '../SecureCodes/UseState';
import { ClassState } from '../SecureCodes/ClassState';
import { Header } from '../Header';
import { MainTitle } from '../Header/MainTitle';
import { SecureCodes } from '../SecureCodes';

function App() {
  return (
    <React.Fragment>
      <Header>
          <MainTitle />
      </Header> 

      <SecureCodes>
        <UseState name="Use State"/>
        <UseReducer name="Use Reducer"/> 
        <ClassState name="Class State"/>
      </SecureCodes>  
      
          
    </React.Fragment>
  );
}

export default App;
