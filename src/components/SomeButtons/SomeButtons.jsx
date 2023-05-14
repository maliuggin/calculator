import React from 'react';
import Button from '../UI/button/Button';

const SomeButtons = ({set}) => {

  function changeSign () {
    set(v => {
      if (v === "0") {
        return v
      }
      set(v[0] === "-" ? v.slice(1,) : "-" + v)
    })
  }


  return ( <div style={{display: "flex"}}>
    <Button style={{flexGrow: "1"}} onClick={() => set("0")}>AC</Button>
    <Button style={{flexGrow: "1"}} onClick={changeSign} >+/-</Button>
    <Button style={{flexGrow: "1"}} onClick={() => set(v => String(+v /100))}>%</Button>
  </div> );
}
 
export default SomeButtons;