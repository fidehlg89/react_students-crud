import React from 'react'

const Form = (props) =>
(
    <form className="form-horizontal">
        <div className="form-group">
            {props.children}
        </div>
    </form>
)

export default Form