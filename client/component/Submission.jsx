import React from 'react';

const Submission = (props) => {
  return (
    <div id="link">
      <div>
        <span>Link:</span><br/>
        <textarea name="link" rows="1" value={props.link} cols="40" onChange={(e) => {props.change(e, 'link');}}></textarea>
      </div>
      <div id="description">
        <span>Description:</span><br/>
        <textarea name="description" value={props.description} rows="10" cols="40" onChange={(e) => {props.change(e, 'description');}}></textarea>
      </div>
      <button onClick={props.handler}>Submit</button>
      
    </div>
  );

};

export default Submission;