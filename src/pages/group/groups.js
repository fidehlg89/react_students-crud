import React from "react";
import { groups, professors } from "./../../db/data"
import { FaPen, FaTrash } from 'react-icons/fa'
import Form from '../../components/form'

class GroupList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: groups,
            professors: professors,
            isCreating: false,
            isUpdating: false,
        }
        this.onNewGroup = this.onNewGroup.bind(this);
    }
    onCreateGroup = () => {
        let grouplist = groups.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        let professorlist = professors.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )

        this.setState({
            groups: grouplist,
            professors: professorlist,
            isCreating: !this.state.isCreating,
        })
    }
    renderCreateview() {
        const { proffesorOption, professors } = this.state;
        return <div className="student-item-create">
            <h5>Crear Grupo</h5>
            <Form>
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <div className="form-control">
                    <span>Seleccione Profesor: </span>
                    <label>Seleccione un Profesor</label>
                    <select className="col-sm-4" value={proffesorOption} ref="theTextProffesorInput" onChange={this.handleProfSelect}>{professors}</select>
                </div>
                <button
                    onClick={this.onNewGroup}
                    className="form-control btn btn-success btn-sm">Guardar
                        </button>
                <button
                    onClick={this.isCreating}
                    className="form-control btn btn-danger btn-sm"> Cancelar
                </button>
            </Form>
        </div>
    };
    onNewGroup = () => {
        this.setState({
            groups: [
                ...this.state.groups,
                {
                    id: Date.now(),
                    name: this.refs.theTextNameInput.value,
                    professorId: this.refs.theTextProfessorInput.value,
                },
            ],
            isCreating: false,
        })
    }

    //Editando Grupos
    onUpdateGroup = (i) => {
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
    onEditGroup = () => {
        const id = this.state.id
        let student = this.state.students[id]

        student.name = this.refs.theTextNameInput.value
        student.professorId = this.refs.theTextGroupInput.value

        this.setState({
            isUpdating: !this.state.isUpdating,
        })
    }

    renderUpdateview = (id) => {
        const student = this.state.students[id];
        const { citiOption, groupOption, proffesorOption, options, groups, proffesors } = this.state;
        return <div className="student-item-create" align="center">
            <h5>Editar Grupo</h5>
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
                    onClick={this.onEditGroup}
                    className="form-control btn btn-success btn-sm">Guardar
                </button>
                <button
                    className="form-control btn btn-danger btn-sm"> Cancelar
                </button>
            </Form>
        </div>
    }

    //Eliminando Grupo
    onDeleteGroup = (groups) => {
        const { groups } = this.state;
        const index = groups.findIndex(n => n.id === groups.id);
        if (index === -1) {
            return;
        }
        const newItems = groups.slice();
        newItems.splice(index, 1);
        this.setState({
            groups: newItems
        });
    }

    //Vista Principal del CRUD Grupo
    renderDefaultview = () => {
        const { groups } = this.state;
        let itemslist = groups.map(item =>
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
                <th className="">
                    {item.lugar_nac}
                </th>
                <th className="">
                    {item.group}
                </th>
                <th className="">
                    <div>
                        <button className="btn btn-default btn-sm btn-success" onClick={() => this.onUpdateGroup(item.id)}><FaPen />
                        </button>
                        <span> </span>
                        <button className="btn btn-default btn-sm btn-danger" onClick={() => this.onDeleteGroup(item)}><FaTrash />
                        </button>
                    </div>
                </th>
            </tr>
        )
        return <div>
            {
                <section className="panel">
                    <h5 className="panel-heading">Listado de Grupos</h5>
                    <button className="new-group-item btn btn-primary btn-sm"
                        onClick={this.onCreateGroup}> Nuevo Grupo
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
                        ) : <p className="text-danger">No existen grupos, haga click en el botón Nuevo grupo</p>}
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

export default GroupList