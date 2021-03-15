export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//funcion para activar el action increment
export const increment =()=>{
    return{
        type: INCREMENT
    }
}
//funcion para activar el action decremetn
export const decrement=()=>{
    return{
        type: DECREMENT
    }
}