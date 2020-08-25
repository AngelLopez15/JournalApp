import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const JournalApp = () => {

  // para que nuestra app pueda acceder al Store necesitamos proveerle un acceso
  // a los datos en la parte mas alta de la app para asi los datos esten disponibles
  // para todos los componentes

  // Para hacer esto necesitamos del Provider como cuando lo ocupamos con el context
  // El provider es un higth order componenet (Componente de orden superior) que contine
  // la informacion que queremos tener disponible en toda la app. En este caso el store
  // de Redux

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
