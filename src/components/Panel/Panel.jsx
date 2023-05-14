import React from 'react';
import { useState } from 'react';
import styles from "./Panel.module.css"

const Panel = ({num}) => {
  return ( <div className={styles.panel}>{num}</div> );
}
 
export default Panel;