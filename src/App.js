import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './components/Fomulaire'
import Message from './components/Message'

// firebase
import base from './base' // bdd

// Animation
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './animations.css'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }
  messagesRef = createRef()

  componentDidMount() {   // componentDidMount s'execute quand l'application est montée
    base.syncState('/', { // synchronise le state avec la base de donnée - ('/') stock les message a la racine
      context: this,      // le 1er argument demande le contexte on met this pour cibler la Class
      state: 'messages'   // le 2ème argument demande ce qu'on veu synchroniser on met donc state: 'message'   
    })
  }

  componentDidUpdate() { // componentDidUpdate s'execute quand l'application est mise à jour
    const ref = this.messagesRef.current // current fait reference a l'element ou est appeler la Ref
    ref.scrollTop = ref.scrollHeight 
  }


  addMessage =  message => {
    const messages={ ... this.state.messages} // on copie le state
    messages[`message-${Date.now()}`] = message // on modifie le  state avec un timestamp pour rendre le message unique
  
    // limite la chatbox à 10 messages
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      messages[key] = null // on atribuit la valeur null pour supprimer un element firebase va supprimer l'element null

    })    
    this.setState({ messages }) // on met à jour le message
  }

  isUser = pseudo => pseudo  === this.state.pseudo

  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message
          isUser={this.isUser}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo} />
      </CSSTransition>
      ))
    
    console.log(messages)
    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
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
