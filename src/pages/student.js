import React from "react";
import { FaPen, FaTrash } from 'react-icons/fa'
import Layout from "../components/layout"
import Navigation from '../components/navigation'
import Form from '../components/form'
import "./style.css"
import { students, cities } from "./../db/data.json"
import Select from 'react-select';

class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: students,
            cities: cities,
            id: '',
            isCreating: false,
            isUpdating: false,
            isViewing: false,
            selectedOption: null,
            options: []
        }
        this.onNewStudent = this.onNewStudent.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    onCreateStudent = () => {        
        let citieslist = cities.map(item =>
            <option value={item.id}>{item.name}</option>          
            )

        this.setState({
            options: citieslist
        })
        console.log(this.state.options)

        this.setState({
            isCreating: !this.state.isCreating,
        })
    }

    onNewStudent = () => {
        this.setState({
            items: [
                ...this.state.items,
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

    handleChangeSelect = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    renderCreateview() {
        const { selectedOption, options } = this.state;
        return <div className="student-item-create" align="center">
            <h5>Crear Estudiante</h5>
            <Form>
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <input className="form-control" type="email" placeholder="Email" ref="theTextEmailInput" />
                <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" />
                <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" />
                <input className="form-control" type="text" placeholder="Fecha de Nacimiento"
                    ref="theTextFecNacInput" />
                <select className="form-control" value={selectedOption} ref="theTextLugNacInput" onChange={this.handleChangeSelect} >{options}</select>
                {console.log(options)}
                <input className="form-control" type="text" placeholder="Grupo"
                    ref="theTextGroupInput" />
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
    }

    //Editando Estudiantes
    onUpdateStudent = (i) => {
        const { students } = this.state;
        const index = students.findIndex(n => n.id === i);
        if (index === -1) {
            return;
        }
        this.setState({
            isUpdating: !this.state.isUpdating,
            id: index
        })
    }

    onEditStudent = () => {
        const id = this.state.id
        let student = this.state.items[id]

        student.name = this.refs.theTextNameInput.value
        student.email = this.refs.theTextEmailInput.value
        student.edad = this.refs.theTextEdadInput.value
        student.sexo = this.refs.theTextSexoInput.value
        student.fecha_nac = this.refs.theTextFecNacInput.value
        student.lugar_nac = this.refs.theTextLugNacInput.value
        student.group = this.refs.theTextGroupInput.value

        this.setState({
            isUpdating: false,
        })
    }

    renderUpdateview = (id) => {
        const student = this.state.items[id];
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
                <input className="form-control" type="text" placeholder="Lugar de Nacimiento" defaultValue={student.lugar_nac}
                    ref="theTextLugNacInput" />
                <input className="form-control" type="text" placeholder="Grupo" defaultValue={student.group}
                    ref="theTextGroupInput" />
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

    renderDefaultview = () => {
        const { students } = this.state;
        let itemslist = students.map(item =>
            <tr className="" key={item.id}>
                <th className="" hidden>
                    {item.id}
                </th>
                <th className="">
                    {item.name}
                </th>
                <th className="">
                    {item.edad}
                </th>
                <th className="" >
                    {item.sexo}
                </th>
                <th className="">
                    {item.email}
                </th>
                <th className="">
                    {item.fecha_nac}
                </th>
                <th className="">
                    {item.lugar_nac}
                </th>
                <th className="">
                    {item.group}
                </th>
                <th className="">
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
                                <tbody className="">{itemslist}</tbody>
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
                <Navigation></Navigation>
                <Layout>
                    {this.state.isCreating || this.state.isUpdating ? '' : this.renderDefaultview()}
                    {this.state.isCreating ? this.renderCreateview() : ''}
                    {this.state.isUpdating ? this.renderUpdateview(this.state.id) : ''}
                </Layout>
            </div>

        )
    }
}

export default StudentList;