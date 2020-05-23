import React from 'react';
import axios from "axios";
// import Header from '../components/Header';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: [] };
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
        axios.get(url).then(response => this.setState({ login: response.data }));
    };


    render() {
        return (
            <div>
                {/* create form to log on}
                {/* <Header /> */}
                <h2>Login</h2>                
                <form>
                    <input type="text" name="username" placeholder="User Name"></input><br></br>
                    <input type="text" name="password" placeholder="Password"></input><br></br>
                    <button type="submit">Submit Me</button>
                </form>

            </div>
        )
    }
}


export default Login;