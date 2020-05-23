import React from 'react';
import axios from "axios";




class Teacher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teacher: [] };
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
        axios.get(url).then(response => this.setState({ teacher: response.data }));
    };

    render() {
        return(
            <div>
                <h2>Teacher Page</h2>
            </div>

        )

    }
}

export default Teacher;