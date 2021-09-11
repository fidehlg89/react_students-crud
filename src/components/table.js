import React from "react";
import "./table.css"

const Table = (props) => (
    <table className="bp3-html-table bp3-html-table-striped">
        {props.children}
    </table>
)

export default Table