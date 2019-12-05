import React from 'react';

function Table(props) {
    return (
        <table>
            <thead>
                {props.header}
            </thead>
            <tbody>
                {props.content}
            </tbody>
        </table>
    )

}