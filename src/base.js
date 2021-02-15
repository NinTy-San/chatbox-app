import Rebase from 're-base' // permet de faciliter l'intrégration de firebase dans un projet React
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({ // fonction pour initiliser firebase qui attend un objet de paramettre ( api key, authDomain, database url)

    apiKey: "AIzaSyDbsSZ6_jTFbCSBUCYn6Hz3wK5VEBvuKII",
    authDomain: "chatbox-app-174d9.firebaseapp.com",
    databaseURL: "https://chatbox-app-174d9-default-rtdb.firebaseio.com",

})

const base = Rebase.createClass(firebase.database()) // permet de lier la variable base a la base de donnée firebase

export { firebaseApp } // export de l'application firebase

export default base // export de base permettant de gérer la base de donnée