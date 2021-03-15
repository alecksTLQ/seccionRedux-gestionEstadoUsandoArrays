import React from 'react'
import {connect} from 'react-redux'
import {} from '../redux/store'

const Info =(props)=>{
    return(
        <div>
            <h1>Name: {props.name} - {props.counter} </h1>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        counter: state.counter,
        name: state.user.name
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info)