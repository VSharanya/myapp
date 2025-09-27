import React from 'react'

function Register() {
  return (
    <div className='text-center'>
        <h1 className='display-2 text-info'>Register</h1>
        <form action="" className='w-50 mx-auto mt-5'>
            <input type='text' name='' id='' className='form-control mb-4' placeholder='Username'/>
            <input type='text' name='' id='' className='form-control mb-4' placeholder='Email'/>
            <input type='text' name='' id='' className='form-control mb-4' placeholder='Date of Birth'/>
            <input type='text' name='' id='' className='form-control mb-4' placeholder='Mobile'/>
            <button type='submit' className='btn btn-success'>Register</button>
        </form>
    </div>
  )
}

export default Register