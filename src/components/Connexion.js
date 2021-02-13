import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
class Connexion extends Component {
    state = { 
        pseudo: '', 
        goToChat: false
     }

    handleChange= event => {
         const pseudo = event.target.value 
         this.setState({ pseudo })
    }

    handleSubmit= event => {
        event.preventDefault()//preventDefault annule l'evenement par defaut à la soumission du formulaire
        this.setState({ goToChat: true })
    }
    

    render() { 

        if ( this.state.goToChat ){
                return <Redirect push to={`/pseudo/${this.state.pseudo}`} ></Redirect> // push redirige en remplaçant la page et gardant la page précedent dans l'historique
        }

        return ( 
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input type="text"
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder="Pseudo"
                    required />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}
 
export default Connexion;