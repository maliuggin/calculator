import React from 'react';
import { useState } from 'react';
import Button from '../UI/button/Button';
import styles from "./Actions.module.css"

const Actions = ({set,num}) => {
  const actions = ["÷", "X", "-", "+", "="]
  const [firstNumber, setFirstNumber] = useState(0)
  const [currentAction, setCurrentAction] = useState("")

  function doAction(act) {
    switch(act) {
      case "+":
        setFirstNumber(num)
        set("0")
        setCurrentAction("+")
        break;
      case "-":
        setFirstNumber(num)
        set("0")
        setCurrentAction("-")
        break;
      case "÷":
        setFirstNumber(num)
        set("0")
        setCurrentAction("/")
        break;
      case "X":
        setFirstNumber(num)
        set("0")
        setCurrentAction("X")
        break;
      case "=":
        set( v => currentAction === "+" ? String(+firstNumber + +v) :
                  currentAction === "-" ? String(+firstNumber - +v) :
                  currentAction === "/" ? String(+firstNumber / +v) :
                  currentAction === "X" ? String(+firstNumber * +v) :
                  null
        )
    }  
  }

  return ( <div className={styles.item}>
    {actions.map(action => <Button onClick={() => doAction(action)}  key={action} style={{backgroundColor: "orange"}}>{action}</Button>)}
  </div> );
}
 
export default Actions;