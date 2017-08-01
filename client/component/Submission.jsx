import React from 'react';

const Submission = () => {
  return (
    <div id="link">
      <div>
        <span>Link:</span><br/>
        <textarea name="description" rows="1" cols="40"></textarea>
      </div>
      <div id="description">
        <span>Description:</span><br/>
        <textarea name="description" rows="10" cols="40"></textarea>
      </div>
      <button>Submit</button>
      
    </div>
  );

};

export default Submission;