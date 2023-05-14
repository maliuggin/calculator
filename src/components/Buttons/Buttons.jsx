import React from 'react';
import styles from "./Buttons.module.css"
import { useState } from 'react';
import Actions from '../Actions/Actions';
import LeftMenu from '../LeftMenu/LeftMenu';

const Buttons = ({set, num}) => {


  return ( <div className={styles.buttons}>
    <LeftMenu  set={set}/>
    <Actions num={num} set={set}/>
  </div> );
}
 
export default Buttons;