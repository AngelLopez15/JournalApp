import { types } from "../types/types"

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