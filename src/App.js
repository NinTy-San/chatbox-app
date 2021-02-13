import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Fomulaire'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage =  message => {
    const messages = { ... this.state.messages} // on copie le state
    messages[`message-${Date.now()}`] = message // on modifie le  state avec un timestamp pour rendre le message unique
    this.setState({ messages }) // on met à jour le message
  }
  render () {
    return (
      <div className='box'>
        <div>
          <div className="message">
            <Message></Message>
            <Message></Message>
            <Message></Message>
          </div>
        </div>
        <Formulaire 
         length= {140}
         pseudo={this.state.pseudo}
         addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
