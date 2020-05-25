import React from 'react';
import axios from "axios";
// import Registration from './Registration'
import {
    // BrowserRouter as Router, 
    Link,
    //  Route
} from "react-router-dom";
// import "../home.min.css";




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { home: [] };
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
        axios.get(url).then(response => this.setState({ home: response.data }));
    };

    register() {
        window.location.href = "./Registration";
    }


    render() {
        if (!this.props.token || this.props.token === "") {
            return (
                <div className='center'>
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
                    

                    <h2>Home</h2>
                    <p>Welcome to the At Home Learning  portal</p>


                    <div>
                        <div>
                            {/* <div style={{ color: "red" }}>{(this.props.error ? this.props.error : '')}</div> */}
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" onChange={this.props.onUsernameChange} />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" onChange={this.props.onPasswordChange} />
                            </div>
                            <div>
                                <button onClick={this.props.onLogin}>Submit</button>
                                <button onClick={this.register}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>


            )
        } else { return(<div>Logged In</div>); }
    }
}


export default Home;