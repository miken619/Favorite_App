import React, { Component } from 'react';
import axios from 'axios';


import User from './User.jsx';
import Content from './Content.jsx';
import Submission from './Submission.jsx';


export default class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  
  }

  handleSubmission() {

  }

  render() {
    return (
      <div>
        <div>
          <User />
        </div>
        <div className="ContentContainer">
          <div className="Content"> 
            <Content/>
          </div>
          <div className="Submission">
            <Submission />
          </div>
        </div>
   
      </div>
      
    )
  }
}