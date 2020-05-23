import React from "react";

import "./App.css";
import Home from './Screens/Home'
import Login from './Screens/Login'
import Registration from './Screens/Registration'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";



// function App() {
//   return (  
//     <div className="App">
//       <Home />        
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="header" ><li>
          <Link to="/">Home</Link>
        </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Registration' component={Registration} />

      </div>
    </Router>
  )
}


export default App;
