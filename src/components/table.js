import React from "react";

const Table = (props) => (
    <table className="table table-striped table-hover table-responsive">
        {props.children}
    </table>
)

export default Table