import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Fomulaire'
import Message from './components/Message'

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div>
          <div className="message">
            <Message></Message>
          </div>
        </div>
        <Formulaire />
      </div>
    )
  }
}

export default App
