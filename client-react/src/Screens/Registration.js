import React from 'react';
import axios from "axios";


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
            //create a form to register uesrs 
            <div className= "register">               
                <h2>Registration</h2>
                <p>To Register, Please complete the below Items.</p>
                <form >
                <input placeholder="First name"></input><br></br>
                <input placeholder="Last Name"></input><br></br>
                <input placeholder="User Name"></input><br></br>
                <input placeholder="Password"></input><br></br>
                <select name="color">
                    <option selected value="R">Student</option>
                    <option value="B">Teacher</option>
                    <option value="W">Parent</option>
                </select><br></br>
                <input type="submit" value="Submit"/>

                </form>


            </div>
        )
    }
}


export default Registration;