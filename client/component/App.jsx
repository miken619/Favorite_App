import React, { Component } from 'react';
import axios from 'axios';


import User from './User.jsx';
import Content from './Content.jsx';
import Submission from './Submission.jsx';
import PopUp from './popUp.jsx';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      images: [],
      link: '',
      description: '',
      popUp: false,
      url: ''
    }
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClicking = this.handleClicking.bind(this);
  }

  componentDidMount() {   
   
    axios.get('/api/contents/fetchContent')
         .then(({data}) => {
           let temp = data.map(val => {
             return val.link;
           });
           this.setState({
             images: [...temp]
           });
         }).catch(err => {
           console.log('Error in componentDidMount: ', err);
         });
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
      images: [link, ...this.state.images],
      link: '',
      description: ''
    });

    axios.post('/api/contents/createContent', {link: link})
         .then(data => {
       })
         .catch(err => {
       });
  }

  handleClicking(event, url, bool) {
    this.setState({
      url: url,
      popUp: bool
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
            <Content images={this.state.images} handler={this.handleClicking}/>
            {this.state.popUp ? <PopUp url={this.state.url} handler={this.handleClicking}/> : null }
          </div>
          <div className="Submission" >
            <Submission handler={this.handleSubmission} change={this.handleOnChange} link={this.state.link} description={this.state.description}/>
          </div>
        </div>
        
      </div>
      
    )
  }
}