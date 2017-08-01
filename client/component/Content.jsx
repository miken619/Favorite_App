import React from 'react';
import ContentEntry from './ContentEntry.jsx';


const Content = (props) => {
  return (
    <div className="ContentDisplay">
     {props.images.map((image, i) => {
        return <ContentEntry image={image} key={i} handler={props.handler}/>
        }
     )}
    </div>
  );

};

export default Content;