import './Users.css'
import User from '../user/User';

function Users(){
    //state(users array)
    let usersList=[
        {
            id: 1,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
          },
          {
            id: 2,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg",
          },
          {
            id: 3,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            avatar: "https://reqres.in/img/faces/9-image.jpg",
          }
    ]
    return(
        <div>
            <h1>Users List</h1>
            <div className="d-flex justify-content-between mt-5">
            {/*nest user for 3 times*/}
            <User userData={usersList[0]}/>
            <User userData={usersList[1]}/>
            <User userData={usersList[2]}/>
            </div>
        </div>
    )
}

export default Users;

