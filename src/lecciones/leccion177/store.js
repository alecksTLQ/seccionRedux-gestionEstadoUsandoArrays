import {createStore} from 'redux'

//estado actual
const initialState = 0

function counter(state = initialState, action){

    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default: 
            return state
    }
}

/*store.subscribe(()=>{
    //store.getState()
    console.log(store.getState())
})*/

export const increment =()=>{
    return{
        type: 'INCREMENT'
    }
}

export const decrement=()=>{
    return{
        type: 'DECREMENT'
    }
}



const store = createStore(counter)

export default store