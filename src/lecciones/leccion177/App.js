import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Counter from './components/counter'

/*
  Store: almacenamiento de nuestro estado
  Reducer es una funcion pura que nos regresa el estado actual
*/

const Header = ()=>{
  return(
    <div>
      <h2> Seccion Redux </h2>
    </div>
  )
}

const App =()=>{
  return(
    <Provider store={store}>
      <div>
        <Header/>
        <Counter></Counter>
      </div>
    </Provider>
  )
}

export default App;
