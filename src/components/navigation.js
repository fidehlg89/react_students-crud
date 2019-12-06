import React, { Component } from "react";

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        return (
            <div className="navbar navbar-dark bg-dark navbar-fixed-top text-white">
                <a href="/" className="navbar-brand">Estudiantes</a> 
                {this.props.children}
            </div>
        )
    }
}

export default Navigation