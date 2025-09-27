import React from 'react'
import { useContext } from 'react'
import B from './B'
import { CounterContext } from '../../contexts/CounterContext'
import { UsersContext } from '../../contexts/UserContext'

function A() {

    let [counter, setCounter]=useContext(CounterContext)
    let users=useContext(UsersContext)

  return (
    <div className='bg-warning p-5'>
        <h1>Component-A</h1>
        <p className='lead fs-1'>Counter: {counter}</p>
        <button className='btn btn-light' onClick={()=>setCounter(counter+1)}>Change Counter </button>
        <h2>{users.length}</h2>
        {
          users.map(userObj=><p key={userObj.id}>{userObj.username}</p>)
        }
        <B/>
    </div>
  )
}

export default A