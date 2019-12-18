import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-hover table-responsive">
            {props.children}
        </table>
    );
}

export default Table