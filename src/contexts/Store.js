import React from 'react'
import { useState } from 'react'
import { CounterContext } from './CounterContext'

function Store({children}) {

    let [counter, setCounter]=useState(100)
  
  return (
    <CounterContext.Provider value={[counter, setCounter]}>
        {children}
    </CounterContext.Provider>
  )
}

export default Store