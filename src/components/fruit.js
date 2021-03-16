import React from 'react'
import {connect} from 'react-redux'
import {addFruit} from '../redux/actions/actionFruits'
 
const Fruit =(props)=>{

    const handlerSubmit=(e)=>{
        e.preventDefault()

        const fruit = e.target[0].value

        e.target[0].value= ''

        props.addFruit(fruit)
    }

    return(
        <div>
            <h1>Fruits</h1>
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder='agregar tu fruta'>
                </input>
                <button>
                    Agregar
                </button>
            </form>
            <ul>
                {
                    props.fruits.map((fruta, index)=>(
                        <li key={fruta + index}>
                            {fruta}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        fruits: state.fruits
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addFruit: (fruit) =>dispatch(addFruit(fruit))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Fruit)