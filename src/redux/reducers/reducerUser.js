import {UPDATENOMBRE} from '../actions/actionUser'

//reducer
function user(state = {name: 'Gerardo'}, action){

    switch(action.type){
        case UPDATENOMBRE: 
            return state = {name: 'Orslok'}
        default: 
            return state
    }
}

export default user