import { useForm } from "react-hook-form";
import {useState} from 'react'

function FormDemo2(){

    //users state
    let [users, setUsers]=useState([])

    let {register, handleSubmit, formState:{errors}}=useForm()

    //handle Form submit
    function handleFormSubmit(userObj){
        setUsers([...users, userObj])
    }

    //delete a user
    function deleteUser(index){
        let copyUsers=[...users]
        copyUsers.splice(index,1)
        setUsers(copyUsers)
    }

    return(
        <div className="row">
            <div className="col-sm-4">
            <h1 className="display-3 text-primary text-centers">Form Demo</h1>
            <form className="w-100 mx-auto mt-5 border p-4 bg-light" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id="username" className="form-control" {...register('username', {required:true, minLength:4, maxLength:8})}/>
                    {/*Validation error message of username*/}
                    {errors.username?.type==='required' && <p className='text-danger'>Username is required</p>}
                    {errors.username?.type==='minLength' && <p className='text-danger'>Min length should be 4</p>}
                    {errors.username?.type==='maxLength' && <p className='text-danger'>Max length should be 8</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" {...register('email',{required:true})}/>
                    {/*Validation error message of email*/}
                    {errors.email?.type==='required' && <p className="text-danger">Email is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="state">Select State</label>
                    <select id="state" className="form-select" {...register('state', {required:true})} defaultValue="">
                        <option value="" disabled>Choose a state</option>
                        <option value="telangana">Telangana</option>
                        <option value="ap">Andhra Pradesh</option>
                    </select>
                </div>
                {/* Validation error message for state */}
                {
                    errors.state?.type==="required" && (<p className="text-danger">Please select a state</p>)
                }
                {/* gender */}
                <div className="mb-3">
                    <label>Choose gender</label>
                    {/* Male */}
                    <div className="form-check">
                        <input type="radio" id="m" className="form-check-input" value="male" {...register("gender")}/>
                        <label htmlFor="m" className="form-check-label">Male</label>
                    </div>
                    {/* Female */}
                    <div className="form-check">
                        <input type="radio" id="f" className="form-check-input" value="female" {...register("gender")}/>
                        <label htmlFor="f" className="form-check-label">Female</label>
                    </div>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea id="" rows="5" className="form-control" {...register('feedback',{required:true})}></textarea>
                </div>
                {errors.feedback?.type==='required' && <p className="text-danger">Feedback is required</p>} */}
                <button className="btn btn-success">Register</button>
            </form>
            </div>
            <div className="col-sm-8">
            {/* Table of users */}
            <h1 className="display-3 text-center text-info mt-5">List of Registered Users</h1>
            <table className="table text-center table-warning">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Gender</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=><tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.state}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>deleteUser(index)}>x</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default FormDemo2;