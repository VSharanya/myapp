// import {useEffect, useState} from 'react'

// function APICallDemo(){

//     let [counter1, setCounter1]=useState(100)
//     let [counter2, setCounter2]=useState(200)

//     function changeCounter1(){
//         setCounter1(counter1+1)
//     }

//     function changeCounter2(){
//         setCounter2(counter2+1)
//     }

//     useEffect(()=>{
//         console.log("use effect called")
//     }, [counter1])

//     return(
//         <div>
//             <h1 className='text-info display-2'>Side effects Demo</h1>
//             <p className='display-2'>{counter1}</p>
//             <button className='btn btn-success' onClick={changeCounter1}>Change Counter1</button>
//             <p className='display-2'>{counter2}</p>
//             <button className='btn btn-success' onClick={changeCounter2}>Change Counter2</button>

//         </div>
//     )
// }

// export default APICallDemo;
import {useEffect, useState} from 'react'

function APICallDemo(){

    let [users, setUsers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(usersList=>setUsers(usersList))
    },[])

    return(
        <div>
            <h1 className='text-info display-2'>List of Users</h1>
            <div className='container'>
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
            </div>
        </div>
    )
}

export default APICallDemo;

