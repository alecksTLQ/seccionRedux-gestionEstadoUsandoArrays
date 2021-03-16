import React from 'react'
import {connect} from 'react-redux'
import {updatenombre} from '../redux/actions/actionUser'
 
const Info =(props)=>{

    const handleChange=(e)=>{
        const nombre = e.target.value
        props.updatenombre(nombre)
    }

    return(
        <div>
            <h1>Name: {props.user.name} - {props.counter} </h1>
            <h2>Country: {props.user.county} </h2>
            <input type='text' onChange={handleChange}></input>
            <button onClick={props.updatenombre}>
                cambiar nombre
            </button>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        counter: state.counter,
        user: state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updatenombre: (nombre)=> dispatch(
            updatenombre(nombre)
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info)