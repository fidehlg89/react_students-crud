import React from "react";
import { students, cities, groups, professors } from "./../../db/data"
import { FaPen, FaTrash } from 'react-icons/fa'
import Form from '../../components/form'

class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: students,
            professors: professors,
            isCreating: false,
            isUpdating: false,
        }
        this.onNewStudent = this.onNewStudent.bind(this);
    }
    onCreateStudent = () => {
        let citieslist = cities.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        let grouplist = groups.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        let professorslist = professors.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )

        this.setState({
            options: citieslist,
            groups: grouplist,
            professors: professorslist,
            isCreating: !this.state.isCreating,
        })
    }
    renderCreateview() {
        const { citiOption, groupOption, options, groups } = this.state;
        return <div className="student-item-create">
            <h5>Crear Estudiante</h5>
            <Form>
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <input className="form-control" type="email" placeholder="Email" ref="theTextEmailInput" />
                <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" />
                <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" />
                <input className="form-control" type="text" placeholder="Fecha de Nacimiento"
                    ref="theTextFecNacInput" />
                <select className="form-control" value={citiOption} ref="theTextLugNacInput" onChange={this.handleCitiSelect} >{options}</select>
                <div className="form-control">
                    <span>Seleccione Grupo: </span>
                    <select className="col-sm-4" value={groupOption} ref="theTextGroupInput" onChange={this.handleGroupSelect} >{groups}</select>
                    {/* <label>Seleccione un Profesor</label>
                    <select className="col-sm-4" value={proffesorOption} ref="theTextProffesorInput" onChange={this.handleProfSelect}>{professors}</select> */}
                </div>
                <button
                    onClick={this.onNewStudent}
                    className="form-control btn btn-success btn-sm">Guardar
                        </button>
                <button
                    onClick={this.isCreating}
                    className="form-control btn btn-danger btn-sm"> Cancelar
                        </button>
            </Form>
        </div>
    };
    onNewStudent = () => {
        this.setState({
            students: [
                ...this.state.students,
                {
                    id: Date.now(),
                    name: this.refs.theTextNameInput.value,
                    edad: this.refs.theTextEdadInput.value,
                    sexo: this.refs.theTextSexoInput.value,
                    email: this.refs.theTextEmailInput.value,
                    fecha_nac: this.refs.theTextFecNacInput.value,
                    lugar_nac: this.refs.theTextLugNacInput.value,
                    group: this.refs.theTextGroupInput.value,
                },
            ],
            isCreating: false,
        })
    }

    //Editando Estudiantes
    onUpdateStudent = (i) => {
        const { students } = this.state;
        const index = students.findIndex(n => n.id === i);
        if (index === -1) {
            return;
        }
        let citieslist = cities.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        let grouplist = groups.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        this.setState({
            options: citieslist,
            groups: grouplist,
            isUpdating: !this.state.isUpdating,
            id: index,
        })
    }
    onEditStudent = () => {
        const id = this.state.id
        let student = this.state.students[id]
        student.name = this.refs.theTextNameInput.value
        student.email = this.refs.theTextEmailInput.value
        student.edad = this.refs.theTextEdadInput.value
        student.sexo = this.refs.theTextSexoInput.value
        student.fecha_nac = this.refs.theTextFecNacInput.value
        student.lugar_nac = this.refs.theTextLugNacInput.value
        student.group = this.refs.theTextGroupInput.value

        this.setState({
            isUpdating: !this.state.isUpdating,
        })
    }
    renderUpdateview = (id) => {
        const student = this.state.students[id];
        const { citiOption, groupOption, proffesorOption, options, groups, proffesors } = this.state;
        return <div className="student-item-create" align="center">
            <h5>Editar Estudiante</h5>
            <Form>
                <input className="form-control" type="email" placeholder="Email" ref="theTextEmailInput" defaultValue={student.email} />
                <input className="form-control" hidden type="number" ref="theTextIDInput"
                    defaultValue={id} key={id} />
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput"
                    defaultValue={student.name} />
                <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" defaultValue={student.edad} />
                <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" defaultValue={student.sexo} />
                <input className="form-control" type="text" placeholder="Fecha de Nacimiento" defaultValue={student.fecha_nac}
                    ref="theTextFecNacInput" />

                <select className="form-control" value={citiOption} ref="theTextLugNacInput" onChange={this.handleCitiSelect} defaultValue={student.lugar_nac}>{options}</select>
                <select className="" value={groupOption} ref="theTextGroupInput" onChange={this.handleGroupSelect} defaultValue={student.group}>{groups}</select>
                <select className="" value={proffesorOption} ref="theTextProffesorInput" onChange={this.handleProfSelect}>{proffesors}</select>

                <button
                    onClick={this.onEditStudent}
                    className="form-control btn btn-success btn-sm">Guardar
                </button>
                <button
                    className="form-control btn btn-danger btn-sm"> Cancelar
                </button>
            </Form>
        </div>
    }

    //Eliminando Estudiante
    onDeleteStudent = (student) => {
        const { students } = this.state;
        const index = students.findIndex(n => n.id === student.id);
        if (index === -1) {
            return;
        }
        const newItems = students.slice();
        newItems.splice(index, 1);
        this.setState({
            students: newItems
        });
    }

    //Vista Principal del CRUD Estudiante
    renderDefaultview = () => {
        const { students } = this.state;
        let itemslist = students.map(item =>
            <tr key={item.id}>
                <th hidden>
                    {item.id}
                </th>
                <th>
                    {item.name}
                </th>
                <th>
                    {item.edad}
                </th>
                <th>
                    {item.sexo}
                </th>
                <th>
                    {item.email}
                </th>
                <th>
                    {item.fecha_nac}
                </th>
                <th>
                    {item.lugar_nac}
                </th>
                <th>
                    {item.group}
                </th>
                <th>
                    <div>
                        <button className="btn btn-default btn-sm btn-success" onClick={() => this.onUpdateStudent(item.id)}><FaPen />
                        </button>
                        <span> </span>
                        <button className="btn btn-default btn-sm btn-danger" onClick={() => this.onDeleteStudent(item)}><FaTrash />
                        </button>
                    </div>
                </th>
            </tr>
        )
        return <div>
            {
                <section className="panel">
                    <h5 className="panel-heading">Listado de Estudiantes</h5>
                    <button className="new-student-item btn btn-primary btn-sm"
                        onClick={this.onCreateStudent}> Nuevo Estudiante
                        </button>
                    <div className="panel-body">
                        {(itemslist.length > 0) ? (<div>
                            <table className="table table-striped table-hover">
                                <thead className="text-info">
                                    <tr>
                                        <th hidden>#</th>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                        <th>Sexo</th>
                                        <th>Email</th>
                                        <th>Fecha de Nacimiento</th>
                                        <th>Lugar de Nacimiento</th>
                                        <th>Grupo</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody >{itemslist}</tbody>
                            </table></div>
                        ) : <p className="text-danger">No existen estudiantes, haga click en el botón Nuevo estudiante</p>}
                    </div>
                </section>
            }
        </div>
    }

    render() {
        return (
            <div>
                {this.state.isCreating || this.state.isUpdating ? '' : this.renderDefaultview()}
                {this.state.isCreating ? this.renderCreateview() : ''}
                {this.state.isUpdating ? this.renderUpdateview(this.state.id) : ''}
            </div>
        );
    }
}

export default StudentList