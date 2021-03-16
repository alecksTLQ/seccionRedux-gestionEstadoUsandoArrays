import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/actions/actionCounter'
import {updatenombre} from '../redux/actions/actionUser'

const Counter =(props)=>{
 
    return(
        <div>
            <button onClick={props.increment}>
                +
            </button>
            <button onClick={props.decrement}>
                -
            </button>
            
            <h1> {props.contador} </h1>
            <p>
                {props.user.name}
            </p>
        </div>
    )
}


//me permite acceder a las propiedades de los reducers del store
// y asignar a propiedades locales las cuales se pueden renombrar
const mapStateToProps=(state)=>{
    return {
        contador: state.counter,
        user: state.user
    }
}
//permite acceder a los metodos del store
const mapDispatchToProps=(dispatch)=>{
    return{
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        updatenombre: ()=> dispatch(updatenombre())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)