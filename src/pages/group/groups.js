import React from "react"
import { FaPen, FaTrash } from 'react-icons/fa'
import Form from '../../components/form'
import Table from '../../components/table'
import { groups, professors, students } from "./../../db/data"

class GroupList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            groups: groups,
            professors: professors,
            students: students,
            isCreating: false,
            isUpdating: false,
            professorOption: '',
            groupProfesorId: 0
        }
        this.onNewGroup = this.onNewGroup.bind(this)
    }

    onCreateGroup = () => {
        const { professors } = this.state
        let professorlist = professors.map(item =>
            <option value={item.id} key={item.id}>{item.name}</option>
        )
        this.setState({
            professors: professorlist,
            isCreating: !this.state.isCreating,
        })
    }
    renderCreateview() {
        const { professorOption, professors } = this.state
        return <div className="group-item-create">
            <h5>Crear Grupo</h5>
            <Form>
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <div className="form-control">
                    <span>Seleccione Profesor: </span>
                    <select className="" value={professorOption} ref="theTextProfessorInput" onChange={this.handleProfSelect}>{professors}</select>
                </div>
                <button
                    onClick={this.onNewGroup}
                    className="form-control btn btn-success btn-sm">Guardar
                </button>
                <button
                    onClick={this.isCreating}
                    className="form-control btn btn-danger btn-sm">Cancelar
                </button>
            </Form>
        </div>
    }
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
        const { groups } = this.state
        const index = groups.findIndex(n => n.id === i)
        if (index === -1) {
            return
        }
        let professorlist = professors.map(item =>
            <option value={item.id} key={item.id}>{item.name}</option>
        )
        this.setState({
            professors: professorlist,
            isUpdating: !this.state.isUpdating,
            id: index,
        })
    }
    onEditGroup = () => {
        const id = this.state.id
        let group = this.state.groups[id]

        group.name = this.refs.theTextNameInput.value
        group.professorId = this.refs.theTextProfessorInput.value

        this.setState({
            professors: professors,
            isUpdating: !this.state.isUpdating,
        })
    }
    handleProfSelect = (e) => {
        this.setState(
            {
                professorOption: e.target.value
            }
        )
    }
    //Formulario de Edición
    renderUpdateview = (id) => {
        const group = this.state.groups[id]

        const { professorOption, professors } = this.state
        return <div className="group-item-create">
            <h5>Editar Grupo</h5>
            <Form>
                <input className="form-control"
                    type="text"
                    placeholder="Nombre"
                    ref="theTextNameInput"
                    defaultValue={group.name}
                />
                <div className="form-control">
                    <span>Seleccione un Profesor: </span>
                    <select
                        defaultValue={professorOption}
                        ref="theTextProfessorInput"
                        onChange={this.handleProfSelect}>
                        {professors}
                    </select>
                </div>
                <button
                    onClick={this.onEditGroup}
                    className="form-control btn btn-success btn-sm">
                    Guardar
                </button>
                <button
                    className="form-control btn btn-danger btn-sm">
                    Cancelar
                </button>
            </Form>
        </div>
    }
    //Eliminando Grupo
    onDeleteGroup = (group) => {
        const { groups } = this.state
        const index = groups.findIndex(n => n.id === group.id)
        if (index === -1) {
            return
        }
        const newItems = groups.slice()
        newItems.splice(index, 1)
        this.setState({
            groups: newItems
        })
    }
    //Vista Principal del CRUD Grupos
    renderDefaultview = () => {
        const { groups, professors } = this.state
        let itemslist = groups.map(item =>
            <tr key={item.id}>
                <th>{item.name}</th>
                <th>{professors[item.professorId-1].name}</th>
                <th className="">
                    <div>
                        <button type="submit" className="btn btn-default btn-sm btn-success"
                            onClick={() => this.onUpdateGroup(item.id)}><FaPen />
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
                            <Table>
                                <thead className="text-info">
                                    <tr>
                                        <th>Grupo</th>
                                        <th>Profesor</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody >{itemslist}</tbody>
                            </Table></div>
                        ) : <p className="text-danger">No existen grupos, haga click en el botón Nuevo grupo</p>}
                    </div>
                </section>
            }
        </div>
    }

    render() {
        return (
            <div className="container">
                {this.state.isCreating || this.state.isUpdating ? '' : this.renderDefaultview()}
                {this.state.isCreating ? this.renderCreateview() : ''}
                {this.state.isUpdating ? this.renderUpdateview(this.state.id) : ''}
            </div>
        )
    }
}

export default GroupList