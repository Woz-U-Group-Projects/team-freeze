import React from 'react';
import axios from "axios";
import "../home.min.css";




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


    render() {
        return (
            <div className ='home'>
                <h2>Home</h2>
                <p>Welcome to the School Lesson tracking portal</p>
                <br></br>
                <form>
                    <input type="text" name="username" placeholder="User Name"></input><br></br>
                    <input type="text" name="password" placeholder="Password"></input><br></br>
                    <button type="submit">Submit Me</button> <button
                </form>
                


            </div>
        )
    }
}


export default Home;