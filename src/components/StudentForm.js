import React from 'react';
import {
    FormGroup,
    Label,
    Classes,
    ButtonGroup,
    Button
} from '@blueprintjs/core';

const StudentForm = ({ onChange, onSubmit, form }) =>
(
    <form onSubmit={onSubmit}>
        <FormGroup>
            <Label>
                Nombre
                <input className={Classes.INPUT} name="name" placeholder="Nombre" onChange={onChange} value={form.name} />
            </Label>
            <Label>
                Correo
                <input className={Classes.INPUT} name="email" placeholder="Correo" onChange={onChange} value={form.email} />
            </Label>
            <Label>
                Edad
                <input className={Classes.INPUT} name="age" placeholder="Edad" onChange={onChange} value={form.age} />
            </Label>
            <Label>
                Sexo
                <input className={Classes.INPUT} name="sex" placeholder="Sexo" onChange={onChange} value={form.sex} />
            </Label>
            <Label>
                Fecha de nacimiento
                <input className={Classes.INPUT} name="birthDate" placeholder="Fecha de Nacimiento" onChange={onChange} value={form.birthDate} />
            </Label>

            <ButtonGroup>
                <Button intent="primary" type="submit" text="Guardar y Salir" ></Button>
                <span className="bp3-divider"></span>
                {/* <Button type="reset" text="Guardar y Crear" onClick={NewStudent}></Button> */}
            </ButtonGroup>
        </FormGroup>
    </form>
)

export default StudentForm