import React from 'react';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand text-white" href="/">Estudiantes</div>
                <div className="navbar-toggler" />
                <div className="Collapse navbar">
                    <nav className="mr-auto">
                        <nav>
                            <div className="nav-link text-white" href="/groups/" 
                            onClick={this.handleClick}>Grupos</div>
                        </nav>
                    </nav>
                </div>
            </div>
        )


    }
}

export default Navigation