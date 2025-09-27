import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

function D() {

    let [counter, setCounter]=useContext(CounterContext)

  return (
    <div className='bg-success p-5'>
        <h1>Component-D</h1>
        <p className='lead fs-1'>Counter: {counter}</p>
        <button className='btn btn-light' onClick={()=>setCounter(counter+1)}>Change Counter </button>
    </div>
  )
}

export default D