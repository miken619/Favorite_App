import React from 'react';

const PopUp = (props) => {
 
  return ( 
      <img className="PopUpDisplay" src={props.url} onClick={e => {props.handler(e, '', false);}}/>     
  );

};

export default PopUp;