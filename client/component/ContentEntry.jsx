import React from 'react';

const ContentEntry = (props) => {
  
  return ( 
    <img className="ContentEntry" src={props.image} onClick={e => { props.handler(e, props.image, true)}}/>
  );

};

export default ContentEntry;