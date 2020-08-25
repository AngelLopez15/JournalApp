// Creando el Store (la fuente de la verdad) de Redux

// importando el store de Redux
import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

// creando el store
// la funcion createStore recibe un parametro. Ese parametro debe ser un reducer
// importante saber que solo puede recer un solo reducer

// Para poder mandar mas de un reducer podemos enviarlos en forma de un objeto
// para esto Redux ya nos proporciona una funcion combineReducer
// dentro de combine Reducer debemos mandar un objeto con todos los reducer que le vamos
// a mandar al store. Es importate que aunque solo tengamos un reducer siempre lo tengamos
// dentro de combineReducers por si despues necesitamos agregar otro reducer
// no tengamos que refactorizar todo el codigo
// Las propiedades dentro del objeto debe tener la estructura de nuestro store. Osea
// listar los reducer con un nombre equivalente a su reducer que manejaran

const reducers = combineReducers({
  auth: authReducer
})

// pasando los reducer al Store
export const store = createStore(reducers)