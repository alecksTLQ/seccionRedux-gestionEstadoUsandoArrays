import {combineReducers} from 'redux'
import counter from './reducerCounter'
import user from './reducerUser'


//el combineReducers nos permite unir reducers en este caso counter, user
//en un solo state
export default combineReducers({
    counter: counter,
    user: user
})