import {useState} from 'react'

function StateDemo2(){

    //state
    let users=[
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
          },
          {
            id: 4,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar: "https://reqres.in/img/faces/10-image.jpg",
          },
          {
            id: 5,
            email: "george.edwards@reqres.in",
            first_name: "George",
            last_name: "Edwards",
            avatar: "https://reqres.in/img/faces/11-image.jpg",
          },
          {
            id: 6,
            email: "rachel.howell@reqres.in",
            first_name: "Rachel",
            last_name: "Howell",
            avatar: "https://reqres.in/img/faces/12-image.jpg",
          }         
    ];

    let [index,setIndex]=useState(0)

    function nextUser(){
        if(index<users.length-1){
        setIndex(index+1)
        }
    }

    function prevUser(){
        if(index>0){
        setIndex(index-1)
        }
    }


    return <div>
        <h1 className="display-1 text-center text-info">User Bio</h1>
        <button className="btn btn-danger mt-5 me-4" onClick={prevUser}>Previous</button>
        <button className="btn btn-warning mt-5" onClick={nextUser}>Next</button>
        <div className="card w-50 mx-auto p-4 mt-4 shadow-lg">
            <img src={users[index].avatar} alt="" className='w-50 d-block mx-auto'/>
            <div className="card-body">
                <p className="lead text-primary fs-1">{users[index].first_name} {users[index].last_name}</p>
                <p className="lead text-secondary fs-3">{users[index].email}</p>
            </div>

        </div>
    </div>
}

export default StateDemo2;
