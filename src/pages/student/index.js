import React from "react";
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'
import Layout from "./../../components/layout"
import './style.css'

class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            isCreating: false,
            isUpdating: false,
            isViewing: false,
        }
        this.onNewStudent = this.onNewStudent.bind(this);
    }

    onCreateStudent = () => {
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
                    born: this.refs.theTextFecNacInput.value,
                    place: this.refs.theTextLugNacInput.value,
                    group: this.refs.theTextGroupInput.value,
                },               
            ],
            isCreating: false,
        })
    }

    renderCreateview() {
        return <div className="student-item-create col-md-6" align="center">
            <h5>Crear Estudiante</h5>
            <form className="form-horizontal" encType="multipart/form-data">
                <div className="form-group" align="center">
                    <div className="">
                        <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                        <input className="form-control" type="email" placeholder="Email" ref="theTextEmailInput" />
                        <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" />
                        <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" />
                        <input className="form-control" type="text" placeholder="Fecha de Nacimiento"
                            ref="theTextFecNacInput" />
                        <input className="form-control" type="text" placeholder="Lugar de Nacimiento"
                            ref="theTextLugNacInput" />
                        <input className="form-control" type="text" placeholder="Grupo"
                            ref="theTextGroupInput" />
                    </div>
                    <button
                        onClick={this.onNewStudent}
                        className="form-control btn btn-success btn-sm">Guardar
                    </button>
                    <button
                        onClick={this.isCreating}
                        className="form-control btn btn-danger btn-sm"> Cancelar
                    </button>
                </div>
            </form>
        </div>
    }

    //Editando Estudiantes
    onUpdateStudent = (i) => {
        const { items } = this.state;
        const index = items.findIndex(n => n.id === i);
        if (index === -1) {
            return;
        }        
        this.setState({
            isUpdating: !this.state.isUpdating,
            id: index
        })
    }

    onEditStudent = () => {
        const id=this.state.id
        let student=this.state.items[id]

        student.name=this.refs.theTextNameInput.value
        student.email=this.refs.theTextEmailInput.value
        student.edad=this.refs.theTextEdadInput.value
        student.sexo=this.refs.theTextSexoInput.value
        student.born=this.refs.theTextFecNacInput.value
        student.place=this.refs.theTextLugNacInput.value
        student.group=this.refs.theTextGroupInput.value

        this.setState({
            isUpdating: false,
        })
    }

    renderUpdateview = (id) => { 
        const student= this.state.items[id];
        return <div className="student-item-create col-md-6" align="center">
            <h5>Editar Estudiante</h5>
            <form className="form-horizontal">
                <div className="form-group" align="center">
                    <div className="">
                        <input className="form-control" hidden type="number" ref="theTextIDInput"
                            defaultValue={id} key={id} />
                        <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput"
                            defaultValue={student.name} />
                        <input className="form-control" type="email" placeholder="Email" ref="theTextEmailInput" defaultValue={student.email} />
                        <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" defaultValue={student.edad} />
                        <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" defaultValue={student.sexo} />
                        <input className="form-control" type="text" placeholder="Fecha de Nacimiento" defaultValue={student.born}
                            ref="theTextFecNacInput" />
                        <input className="form-control" type="text" placeholder="Lugar de Nacimiento" defaultValue={student.place}
                            ref="theTextLugNacInput" />
                        <input className="form-control" type="text" placeholder="Grupo" defaultValue={student.group}
                            ref="theTextGroupInput" />
                    </div>
                    <button
                        onClick={this.onEditStudent}
                        className="form-control btn btn-success btn-sm">Guardar
                </button>
                    <button
                        className="form-control btn btn-danger btn-sm"> Cancelar
                </button>
                </div>
            </form>
        </div>
    }

    onDeleteStudent = (student) => {
        const { items } = this.state;
        const index = items.findIndex(n => n.id === student.id);
        if (index === -1) {
            return;
        }
        const newItems = items.slice();
        newItems.splice(index, 1);
        this.setState({
            items: newItems
        });
    }

    renderDefaultview = () => {
        const { items } = this.state;
        let itemslist = items.map(item =>
            <tr className="">
                <th className="" key={item.id}>
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
                    {item.born}
                </th>
                <th className="">
                    {item.place}
                </th>
                <th className="">
                    {item.group}
                </th>

                <th className="">
                    <div>
                        <button className="btn btn-default btn-sm" onClick={() => this.changeEditMode(item.id - 1)}><FaEye />
                        </button>
                        <button className="btn btn-default btn-sm" onClick={() => this.onUpdateStudent(item.id)}><FaPen />
                        </button>
                        <button className="btn btn-default btn-sm" onClick={() => this.onDeleteStudent(item)}><FaTrash />
                        </button>
                    </div>

                </th>
            </tr>
        )
        return <div>
            {

                <div className="">
                    <h5>Listado de Estudiantes</h5>
                    <button className="new-student-item btn btn-primary btn-sm" onClick={this.onCreateStudent}>
                        Nuevo Estudiante
                            </button>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Sexo</th>
                                <th>Email</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Lugar de Nacimiento</th>
                                <th>Grupo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{itemslist}</tbody>
                    </table>
                </div>

            }
        </div>
    }
    render() {
        return (
            <div>
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