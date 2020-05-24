import React from 'react';
import axios from "axios";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = { student: [] };
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
        axios.get(url).then(response => this.setState({ student: response.data }));
    };

    //
    render() {
        return (
            //create a student dashboard 
            <div className="student">
                <h2>Student Page</h2>
                <h3>Welcome to The School Lesson Tracking Portal</h3>
            </div>
        )
    }
}


export default Student;