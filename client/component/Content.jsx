import React from 'react';
import ContentEntry from './ContentEntry.jsx';


const Content = (props) => {
  return (
    <div className="ContentDisplay">
     {props.images.map((image, i) => {
        return <ContentEntry image={image} key={i}/>
     }
     )}
    </div>
  );

};

export default Content;