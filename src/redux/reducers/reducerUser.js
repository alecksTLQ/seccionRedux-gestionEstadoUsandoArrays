import {UPDATENOMBRE} from '../actions/actionUser'

const initialState = {
    name: 'Orslok',
    county: 'Spain'
}


//reducer
function user(state = initialState, action){

    switch(action.type){
        case UPDATENOMBRE: 
            return {
                ...state,
                name: action.payload.name
            }
        default: 
            return state
    }
}

export default user