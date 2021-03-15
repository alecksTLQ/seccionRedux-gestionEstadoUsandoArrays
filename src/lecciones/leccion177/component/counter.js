import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../store'

const Counter =(props)=>{
 
    return(
        <div>
            <button onClick={props.increment}>
                +
            </button>
            <button onClick={props.decrement}>
                -
            </button>
            <h1> {props.state} </h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)