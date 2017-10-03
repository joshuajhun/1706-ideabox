import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  updateStuff(key, event) {
    this.setState({[key]: event.target.value})
  }

  submitToApp() {
    const idea = Object.assign({ id: Date.now() }, this.state)
    this.props.addIdea(idea)
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
      <div>
        <input placeholder='title'
               value={this.state.title}
               onChange={ this.updateStuff.bind(this, 'title') }
               className='title-input'
             />
        <input placeholder='description'
               value={this.state.description}
               onChange={ (event) => this.updateStuff('description', event) }
               className= 'description-input'
             />
        <button onClick={() => this.submitToApp() }
                className='submit-button'>
          Submit
        </button>
      </div>
    )
  }
}
