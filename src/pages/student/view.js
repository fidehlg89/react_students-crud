import React from "react";
import { students } from "./../../db/data"

class StudentView extends React.Component {    

    render() {
        const studentlist = students.map(item =>
            <li key={item.id}>{item.name}</li>
        )
        return (
            <div className="student-list">
                {studentlist}
            </div>
        );
    }
}

export default StudentView