import React from 'react';
import Button from '../UI/button/Button';
import styles from "./Numbers.module.css"
const Numbers = ({set}) => {
  const numbers = [9,8,7,6,5,4,3,2,1]
  
  function addNumber(num) {
    set(v => v === "0" ? String(num): v + String(num))
  }

  function addDot() {
    set(v => {
      if (v.includes(".")) {
        return v
      }
      return v + "."
    })
  }
  return ( <div className={styles.item}>
    {numbers.map((num) => <Button onClick={() => addNumber(num)}  key={num}>{num}</Button>)}
    <Button style={{gridColumn: "1/3"}} onClick={() => addNumber("0")}>0</Button>
    <Button onClick={addDot} >.</Button>
  </div> );
}
 
export default Numbers;