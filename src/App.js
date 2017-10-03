import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
    this.addIdea = this.addIdea.bind(this)
    this.deleteIdea = this.deleteIdea.bind(this)
  }

  addIdea(idea) {
    const newState = [...this.state.ideas, idea]
    this.setState({ ideas: newState })
  }

  deleteIdea(id) {
    const newState = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: newState })
  }

  render() {
    return (
      <div className="App">
        <h1>IDEAS!</h1>
        <Controls addIdea={ this.addIdea } />
        <CardContainer ideas={ this.state.ideas } deleteIdea={ this.deleteIdea } />
      </div>
    );
  }
}

export default App;
