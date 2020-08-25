// declarando el reducer (recordar que es una simple funcion de JS)

import { types } from "../types/types";

// recordar que los reducer reciben dos parametros:
// 1- El state 
// 2- El action

// Como funcionara el State:
/* Cuando no se esta autentificado el state esta como objeto vacio {}
Cuando ya se esta autentificado el objeto se llenara con:
{
  uid: '515d4adandjbawjdwj' //(un id del usario)
  nombre: 'Angel'
}
*/

// Recordar que las acciones siempre se manejan por medio de un switch
// el valor de los cases (types) se pueden poner directamente o tambien
// es recomendable ponerlos en un archivo separado donde solo estaran los
// types. 

export const authReducer = (state={},action) => {

  switch (action.type) {
    case types.login:
      // En loggin vamos a retornar un nuevo objeto
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case types.logout:
      // En loggout lo unico que hacemos es restablecer nuestro objeto al estado inicial
      // En este caso a un objeto vacio
      return {}
    default:
      // El caso por default siempre haque retornarlo al state sin modificar
      // en este caso coincide en que sea un mismo objeto vacio
      return {}
  }

}

