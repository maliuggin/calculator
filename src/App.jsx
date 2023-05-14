import React from 'react';
import { useState } from 'react';
import "./styles/App.css";
import Panel from './components/Panel/Panel';
import Buttons from './components/Buttons/Buttons';

function App() {
  const [number, setNumber] = useState("0")

  return (
    <div className='calculator'>
      <Panel num={number}  />
      <Buttons num={number} set={setNumber}/>
    </div>
  )
}

export default App
