import React from "react";
import { groups, professors } from "./../../db/data"
import { FaPen, FaTrash } from 'react-icons/fa'
import Form from '../../components/form'

class GroupList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: groups,
            professorlist: professors,
            professors: professors,
            isCreating: false,
            isUpdating: false,
            groupProfesorId:0
        }
        this.onNewGroup = this.onNewGroup.bind(this);
    }
    onCreateGroup = () => {
        let professorlist = professors.map(item =>
            <option value={item.id} key={item.id}>{item.name}</option>
        )

        this.setState({
            professors: professorlist,
            isCreating: !this.state.isCreating,
        })
    }
    renderCreateview() {
        const { proffesorOption, professors } = this.state;
        return <div className="group-item-create">
            <h5>Crear Grupo</h5>
            <Form>
                <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <div className="form-control">
                    <span>Seleccione Profesor: </span>
                    <select className="" value={proffesorOption} ref="theTextProffesorInput" onChange={this.handleProfSelect}>{professors}</select>
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
    };
    onNewGroup = () => {
        this.setState({
            groups: [
                ...this.state.groups,
                {
                    id: Date.now(),
                    name: this.refs.theTextNameInput.value,
                    professorId: this.refs.theTextProffesorInput.value,
                },
            ],
            isCreating: false,
        })
    }

    //Editando Grupos
    onUpdateGroup = (i) => {
        const { groups } = this.state;
        const index = groups.findIndex(n => n.id === i);
        if (index === -1) {
            return;
        }
        let grouplist = groups.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        this.setState({
            groups: grouplist,
            isUpdating: !this.state.isUpdating,
            id: index,
        })
    }
    onEditGroup = () => {
        const id = this.state.id
        let group = this.state.groups[id]

        group.name = this.refs.theTextNameInput.value
        group.professorId = this.refs.theTextGroupInput.key

        this.setState({
            isUpdating: !this.state.isUpdating,
        })
    }
    renderUpdateview = (id) => {
        const group = this.state.groups[id];
        const { proffesorOption, proffesors } = this.state;
        return <div className="group-item-create" align="center">
            <h5>Editar Grupo</h5>
            <Form>
                <input className="form-control" type="email" placeholder="Name" ref="theTextEmailInput" defaultValue={group.email} />
                <select className="" value={proffesorOption} onChange={this.handleProfSelect} ref="theTextProffesorInput">{proffesors}</select>
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
    onDeleteGroup = (group) => {
        const index = groups.findIndex(n => n.id === group.id);
        if (index === -1) {
            return;
        }
        const newItems = groups.slice();
        newItems.splice(index, 1);
        this.setState({
            groups: newItems
        });
    }
    //Vista Principal del CRUD Grupos
    renderDefaultview = () => {
        const { groups, professorlist } = this.state;
        console.log(professorlist)
        let itemslist = groups.map(item =>
            <tr key={item.id} >
                <th>
                    {item.name}
                </th>
                <th>
                    {this.state.groupProfesorId = item.professorId}
                    {console.log(this.state.groupProfesorId)}
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
                                        <th>Nombre</th>
                                        <th>Profesor</th>
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