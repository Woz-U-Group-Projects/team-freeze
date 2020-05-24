import React from 'react';
import axios from "axios";
import {
    //  BrowserRouter as Router, 
    Link, 
    // Route 
} from "react-router-dom";



class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { registration: [] };
        this.taskName = React.createRef();
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/tasks";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ registration: response.data }));
    };

    //
    render() {
        return (
            <div>
                <ul className="header" >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/Login">Login</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/Registration">Registration</Link>
                    </li> */}
                    <li>
                        <Link to="/">Log Off</Link>
                    </li>
                </ul>

                {/* create a form to register uesrs  */}
                <div className="center">
                    <h2>Registration</h2>
                    <p>To Register, Please complete the below Items.</p>
                    <form >
                        <select name="Role">
                            <option selected value="S">Student</option>
                            <option value="T">Teacher</option>
                            <option value="P">Parent</option>
                        </select><br></br>

                        <div>
                            <label><input type="text" placeholder="First name" name="firstName" /> </label>
                        </div>
                        <div>
                            <label><input type="text" placeholder="Last Name" name="lastName" /></label>
                        </div>
                        <div>
                            <label> <input type="text" placeholder="User Name" name="username" /></label>
                        </div>
                        <div>
                            <label><input type="password" placeholder="Password" name="password" /></label>
                        </div>
                        {/* <input placeholder="First name"></input><br></br> */}
                        {/* <input placeholder="Last Name"></input><br></br> */}
                        {/* <input placeholder="User Name"></input><br></br> */}
                        {/* <input placeholder="Password"></input><br></br> */}
                        <input type="submit" value="register" />

                    </form>


                </div>

            </div>
        )
    }
}


export default Registration;