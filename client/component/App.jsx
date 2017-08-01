import React, { Component } from 'react';
import axios from 'axios';


import User from './User.jsx';
import Content from './Content.jsx';
import Submission from './Submission.jsx';


export default class App extends {

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
        <div>
          <div> 
            <Content />
          </div>
          <div>
            <Submission />
          </div>
        </div>
   
      </div>
      
    )
  }
}