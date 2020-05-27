import React from "react";
import axios from "axios";
import '../task.min.css'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
        this.taskName = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/users";

        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";

        // Express uses port 3001 (react uses 3000)
        // let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ user: response.data }));
    };

    addUserk = () => {
        let url = "http://localhost:8080/users";
        axios.post(url, { name: this.username.current.value }).then(response => { 
            // refresh the data
            this.getData();
            // empty the input
            this.username.current.value = "";
        });
        axios.post(url, { password: this.password.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.password.current.value = "";
        });
        axios.post(url, { firstName: this.firstName.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.firstName.current.value = "";
        });
        axios.post(url, {lastName: this.lastName.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.username.current.value = "";
        });
        axios.post(url, {role: this.role.current.value }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.role.current.value = "";
        });
        
    };


    render() {
        return (<div className="center">
            <h2>Registration</h2>
            <p>To Register, Please complete the below Items.</p>
            <form >
            <input ref={this.user.role} />
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
        );
    }
}

export default User;
