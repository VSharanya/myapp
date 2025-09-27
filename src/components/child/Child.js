import React from 'react'

function Child(props){

    //state
    let b=1234;

    return(
        <div className='bg-warning p-5'>
            <h1>Child Component</h1>
            <p className='lead fs-1 text-danger'>Data from Parent is {props.data}</p>
            <button className="btn btn-info" onClick={()=>props.fun(b)}>Send to Parent</button>
        </div>
    )
}

export default Child;
