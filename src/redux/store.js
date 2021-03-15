import {createStore} from 'redux'
import rootReducer from './reducers'

/*
    store
    almacenamiento de nuestro estado
*/
const store = createStore(rootReducer)

export default store