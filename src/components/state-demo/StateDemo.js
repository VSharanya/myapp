import {useState} from 'react'

function StateDemo(){
    //state
    let [counter, setCounter] = useState(1)
    let [username, setUsername] = useState('Sharanya')
    let [emp, setEmp] = useState({eid:100, name:'Akhila', city:'Hyderabad'})
    let [skills, setSkills] = useState(['js', 'css'])
    
    function incrementCounter(){
        //modify state
        setCounter(counter+1)
    }

    function changeName(){
        setUsername('Harshitha')
    }
    function changeEmpData(){
        setEmp({...emp, name: 'Sridevi', city:'Chennai'})
    }

    function addSkill(){
        setSkills([...skills, 'react'])

    }

    function deleteSkill(){
        //create copy of skills
        let copySkills=[...skills]
        //remove a skill from copy
        copySkills.pop()
        //replace old state with new state
        setSkills(copySkills)
    }

    return(
        <div>
            <h2 className="display-2">State Demo</h2>
            <h1 className='display-4'>{counter}</h1>
            <h1 className='display-4'>{username}</h1>
            <button className="btn btn-success" onClick={incrementCounter}>Increment</button>
            <button className="btn btn-danger" onClick={changeName}>Change Name</button>
            <h1>{emp.eid}</h1>
            <h1>{emp.name}</h1>
            <h1>{emp.city}</h1>
            <button className="btn btn-warning" onClick={changeEmpData}>Modify Emp</button>
            {
                skills.map((skill, ind)=><h1 key={ind}>{skill}</h1>)
            }
            <button className="btn btn-primary" onClick={addSkill}>Add New Skill</button>
            <button className="btn btn-secondary" onClick={deleteSkill}>Delete Skill</button>
        </div>
    )
}

export default StateDemo;
