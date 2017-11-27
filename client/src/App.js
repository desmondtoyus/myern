import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import API from './utils/API';

class App extends Component {
  state={
    email:''
  }
  handleEmailInput= (event) => {
    event.preventDefault();
    const {name, value}=event.target;
    this.setState({
      [name]:value
    })
    console.log(this.state.email);
  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email) {
      API.saveEmail(
        { myemail: this.state.email }
        
      )
        .then(res => console.log('Success'))
        .catch(err => console.log(err));
    }
  }

  render() {
   
    return (
       <Router >
      <div >
          <Navbar handleEmailInput={this.handleEmailInput} handleFormSubmit={this.handleFormSubmit}/>
      <Route exact path ="/Home" component={Home}/>
      <Route exact path="/About" component={About} />
      </div>
       </Router >
    );
    
  }
 
}

export default App;
