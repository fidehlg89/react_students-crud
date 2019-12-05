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
               <span className="text-white"> 
                { this.props.title }
               </span>
                {this.props.children} 
            </nav>
        )
    }    
}

export default Navigation