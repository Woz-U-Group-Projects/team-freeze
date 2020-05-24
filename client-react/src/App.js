import React from "react";

import "./App.css";
import Home from './Screens/Home'
import Login from './Screens/Login'
import Registration from './Screens/Registration'
import Teacher from './Screens/Teacher'
import CreateLesson from './Screens/CreateLesson'
import CurrentLessonPlan from './Screens/CurrentLessonPlan'
import Gradebook from './Screens/Gradebook'
import {BrowserRouter as Router, 
  // Link,
  Route
  } from "react-router-dom";
import Student from './Screens/Student'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";



// function App() {
//   return (  
//     <div className="App">
//       <Home />        
//     </div>
//   );
// }

//function to load the titile bar 
function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul className="header" >
          <li>
          <Link to="/">Home</Link>
        </li> */}
          {/* <li>
            <Link to="/Login">Login</Link>
          </li>*/}
          {/* <li>
            <Link to="/Registration">Registration</Link>
          </li>  */}
          {/* <li>
            <Link to="/">Log Off</Link>
          </li> 
        </ul>*/ }

        

        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Registration' component={Registration} />
        <Route path='/Teacher' component={Teacher} />
        <Route path='/CreateLesson' component={CreateLesson} />
        <Route path='/CurrentLessonPlan' component={CurrentLessonPlan} />
        <Route path='/Gradebook' component={Gradebook} />
        <Route path='/Student' component={Student} />

      </div>
    </Router>
  )
}


export default App;
