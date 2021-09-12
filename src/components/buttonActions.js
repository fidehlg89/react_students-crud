import React from 'react';
import { Button, ButtonGroup, Icon } from "@blueprintjs/core";

const buttonActions = ({ item, handleDelete }) => {
    return (
        <ButtonGroup minimal>
            <Button intent="success"><Icon icon="edit" size={12} /></Button>
            <span className="bp3-divider"></span>
            <Button intent="danger" onClick={() => handleDelete(item)}><Icon icon="trash" size={12} /></Button>
        </ButtonGroup>
    )
}

export default buttonActions;