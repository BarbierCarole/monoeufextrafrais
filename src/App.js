import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {register, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from V2</h1>
        </header>
        
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dlc">Date limite de consommation</label>
        <input type="text" id="dlc" nome="dlc" ref={register} />
      </form>        
      </div>
    </div>
  );
}

export default App;
