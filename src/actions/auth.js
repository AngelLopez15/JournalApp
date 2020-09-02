import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

// Accion asincrona
export const startLoginEmailPassword = (email,password) =>{
  // el dispatch nos lo provee thunk
  return (dispatch) => {

    // Se pueden hacer varios dispatch en esta seccion.

    setTimeout(()=>{
      dispatch(login(123,'Angel'))
    }, 3500);
  }
}

export const startGoogleLogin = () =>{
  return (dispatch) =>{
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user})=>{
        dispatch(
          login(user.uid, user.displayName)
        )
      })
  }
}

// action que se va a ejecutar cuando se tenga el uid y el displayname
export const login = (uid, displayName) => {
  return{
    type:types.login,
    payload:{
      uid,
      displayName
    }
  }
}