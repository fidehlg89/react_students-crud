import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        return <form className="form-horizontal" encType="multipart/form-data">            
            <div className="form-group" align="center">
                {this.props.children}
            </div>
        </form>
    }
}

export default Form