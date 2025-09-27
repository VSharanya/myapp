import React from 'react'
import { useContext } from 'react'
import C from './C'
import { CounterContext } from '../../contexts/CounterContext'

function B() {

    let [counter, setCounter]=useContext(CounterContext)
  return (
    <div className='bg-primary p-5'>
        <h1>Component-B</h1>
        <p className='lead fs-1'>Counter: {counter}</p>
        <button className='btn btn-light' onClick={()=>setCounter(counter+1)}>Change Counter </button>
        <C/>
    </div>
  )
}

export default B