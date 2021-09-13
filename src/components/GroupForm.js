import React from 'react';
import {
    FormGroup,
    Label,
    Classes,
    ButtonGroup,
    Button
} from '@blueprintjs/core';

const GroupForm = ({ onChange, onSubmit, form }) =>
(
    <form onSubmit={onSubmit}>
        <FormGroup>
            <Label>
                Nombre
                <input className={Classes.INPUT} name="name" placeholder="Nombre" onChange={onChange} value={form.name} />
            </Label>
            <ButtonGroup>
                <Button intent="primary" type="submit" text="Guardar y Salir" ></Button>
                <span className="bp3-divider"></span>
                {/* <Button type="reset" text="Guardar y Crear" onClick={NewStudent}></Button> */}
            </ButtonGroup>
        </FormGroup>
    </form>
)

export default GroupForm