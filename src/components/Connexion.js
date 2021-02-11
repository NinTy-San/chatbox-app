import React, { Component } from 'react';

class Connexion extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text"
                    placeholder="Pseudo"
                    required />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}
 
export default Connexion;