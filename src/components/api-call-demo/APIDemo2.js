import {useState} from 'react'

function APIDemo2(){

    let [users, setUsers]=useState([])

    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(usersList=>setUsers(usersList))
    }

    return(
        <div>
            <p className='display-1 text-secondary'>List of Users</p>
            <button className='btn btn-success' onClick={getUsers}>Get Users</button>
            <div className='container'>
                {
                    users.length===0 ? <p className='display-3 text-danger'>No Users</p>:
                    <table className='table text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(userObj=><tr key={userObj.id}>
                                <td>{userObj.id}</td>
                                <td>{userObj.name}</td>
                                <td>{userObj.username}</td>
                                <td>{userObj.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default APIDemo2;
