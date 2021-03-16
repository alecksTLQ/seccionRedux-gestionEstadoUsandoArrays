import {ADD_FRUIT} from '../actions/actionFruits'


const initialState=[
    'fresa',
    'manzana'
]

function fruits (state = initialState, action){
    switch(action.type){
        case ADD_FRUIT:
            return[
                ...state,
                action.payload.fruit
            ]
        default:
            return state
    }
}

export default fruits