//create Test1 component
import './Test1.css'

function Test1(props){
    //state

    return(
        <div className="test1-div">
            <h1>Test1 Component</h1>
            <h3>{props.data}</h3>
        </div>
    );
}

export default Test1;