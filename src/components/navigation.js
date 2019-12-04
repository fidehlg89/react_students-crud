import React, {Component} from "react";

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state={            
            props
        }
    }

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
               <a className="text-white"> 
                { this.props.title }
               </a>
                {this.props.children} 
            </nav>
        )
    }    
}

export default Navigation