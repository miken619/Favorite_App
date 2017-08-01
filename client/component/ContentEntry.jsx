import React from 'react';

const ContentEntry = (props) => {
  console.log('In contentEntry: ', props.image);
  return ( 
    <img className="ContentEntry" src={props.image}/>
  );

};

export default ContentEntry;