import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/vue/RootLayout';
import Home from './components/home/Home'; 
import Register from './components/register/Register';
import Login from './components/login/Login';
import Technologies from './components/technologies/Technologies';
import ErrorRoute from './components/vue/ErrorRoute';
import Java from './components/java/Java';
import NodeJs from './components/nodejs/NodeJs';
import VueJS from './components/vue/VueJS';
//import Test1 from './components/test1/Test1'
//import Users from './components/users/Users';
// import Test2 from './components/test2/Test2'
//import StateDemo from './components/state-demo/StateDemo';
//import StateDemo2 from './components/state-demo2/StateDemo2'
//import Parent from './components/parent/Parent';
//import APICallDemo from './components/api-call-demo/APICallDemo';
//import APIDemo2 from './components/api-call-demo/APIDemo2';
//import FormDemo from './components/form-demo/FormDemo';
//import FormDemo2 from './components/form-demo/FormDemo2';
//import ManageTasks from './components/to-do/ManageTasks';
// import A from './components/context-demo-1/A';
// import D from './components/context-demo-1/D';

function App() {
  //state
    // let a=10;
    // let b=20;
    // let c=30;

    //Create Browser router obj
    let router = createBrowserRouter([
      {
        path: '',
        element: <RootLayout/>,
        errorElement: <ErrorRoute/>,
        children: [
          {
            path:'',
            element: <Home/>
          },
          {
            path:'register',
            element: <Register/>
          },
          {
            path:'login',
            element: <Login/>
          },
          {
            path:'technologies',
            element: <Technologies/>,
            children: [
              {
                path: 'java',
                element: <Java/>
              },
              {
                path: 'nodejs',
                element: <NodeJs/>
              },
              {
                path: 'vue',
                element: <VueJS/>
              }
            ]
          }
        ]
      }
    ])

  return(
    <div>
      {/* <h1 className='text-info display-1 bg-light'>Welcome to React</h1> */}
      {/* <div className='container'> */}
       {/* <Test1 data={a}/>
       <Test1 data={b}/>
       <Test1 data={c}/> */}
       {/*nest Users*/}
        {/* <Users/> */}
        {/* <StateDemo/> */}
        {/* <StateDemo2/> */}
        {/* <Parent/> */}
        {/* <APICallDemo/> */}
        {/* <APIDemo2/> */}
        {/* <FormDemo/> */}
        {/* <FormDemo2/> */}
        {/* <ManageTasks/> */}
        {/* <A/>
        <D/> */}
      {/* </div> */}
      {/* Provide BrowserRouter to application */}
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
