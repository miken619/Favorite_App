import React, { Component } from 'react';
import axios from 'axios';


import User from './User.jsx';
import Content from './Content.jsx';
import Submission from './Submission.jsx';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      images: [],
      link: '',
      description: ''
    }
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    
  }
  
  handleOnChange(event, name) {
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmission(event) {
    let link = this.state.link;
    let description = this.state.description;
    this.setState({
      link: '',
      description: ''
    });
    
 
  }

  render() {
    return (
      <div>
        <div className="User">
          <User />
        </div>
        <div className="ContentContainer">
          <div className="Content"> 
            <Content/>
          </div>
          <div className="Submission" >
            <Submission handler={this.handleSubmission} change={this.handleOnChange} link={this.state.link} description={this.state.description}/>
          </div>
        </div>
   
      </div>
      
    )
  }
}