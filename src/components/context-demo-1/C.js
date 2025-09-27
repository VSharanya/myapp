import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

function C() {

    let [counter, setCounter]=useContext(CounterContext)

  return (
    <div className='bg-secondary p-5'>
        <h1>Component-C</h1>
        <p className='lead fs-1'>Counter: {counter}</p>
        <button className='btn btn-light' onClick={()=>setCounter(counter+1)}>Change Counter </button>
    </div>
  )
}

export default C