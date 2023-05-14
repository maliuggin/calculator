import React from 'react';
import Numbers from '../Numbers/Numbers';
import SomeButtons from '../SomeButtons/SomeButtons';

const LeftMenu = ({set}) => {
  return ( <div style={{width: "100%"}}>
    <SomeButtons set={set} />
    <Numbers set={set} />
  </div> );
}
 
export default LeftMenu;