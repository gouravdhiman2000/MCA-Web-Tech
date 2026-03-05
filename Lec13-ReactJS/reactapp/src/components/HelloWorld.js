import React from 'react'
import InitialWorld from './InitialWorld';


const HelloWorld = () => {
    let styles = {
        backgroundColor:'orange'
    }
    return (
        <div style={styles}>
            <InitialWorld/>
            <div>HelloWorld!</div>
        </div>
    )
}

export default HelloWorld