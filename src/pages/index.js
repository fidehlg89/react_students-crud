import React from "react";
import Layout from "../components/layout"
import Navigation from '../components/navigation'
import { FaPen, FaTrash } from 'react-icons/fa'
import Form from '../components/form'
import "./style.css"
import { groups, professors } from "./../db/data.json"
import {
    NavItem,
    NavLink
} from 'reactstrap'

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreatingGroup: false,
            citiOption: 'Lugar de Nacimiento',
            groupOption: 'Grupo',
            proffesorOption: 'Profesor',
            professors: [],
            cities: [],
            groups: groups
        }
        this.onNewGroup = this.onNewGroup.bind(this);
        this.handleCitiSelect = this.handleCitiSelect.bind(this);
        this.handleGroupSelect = this.handleGroupSelect.bind(this);
        this.handleProfSelect = this.handleProfSelect.bind(this);
    }


    handleCitiSelect = () => {
        this.setState(
            {
                citiOption: this.refs.theTextLugNacInput.value
            }
        );
    };
    handleGroupSelect = () => {
        this.setState(
            { groupOption: this.refs.theTextGroupInput.value }
        );
    };
    handleProfSelect = () => {
        this.setState(
            { proffesorOption: this.refs.theTextProffesorInput.value }
        );
    };

    //CRUD de Grupos
    onCreateGroup = () => {
        let proffesorslist = professors.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        this.setState({
            professors: proffesorslist,
            isCreatingGroup: !this.state.isCreatingGroup,
        })
    }
    formGroupCreate() {
        const { proffesorOption, professors } = this.state;
        return <div className="group-item-create">
            <h5>Agregar un grupo</h5>
            <Form>
                <input className="form-control col-sm-6" type="text" placeholder="Nombre" ref="theTextNameInput" />
                <div className="form-control col-sm-6">
                    <span>Profesor Guía: </span>
                    <select className="col-sm-6" value={proffesorOption} ref="theTextProffesorInput" onChange={this.handleProfSelect}>{professors}</select>
                </div>
                <button
                    onClick={this.onNewGroup}
                    className="form-control btn btn-success btn-sm">Guardar
                        </button>
                <button
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
                    professorId: this.refs.theTextProffesorInput.value,
                },
            ],
        })
    }

    renderGroupview = () => {
        const { groups } = this.state;
        console.log(groups);
        let itemslist = groups.map(item =>
            <tr key={item.id}>
                <th>
                    {item.name}
                </th>
                <th>
                    {item.professorId}
                </th>
                <th>
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
                    <h5 className="panel-heading">Grupos</h5>
                    <button className="new-student-item btn btn-primary btn-sm"
                        onClick={this.onCreateGroup}> Nuevo Grupo
                        </button>
                    <div className="panel-body">
                        {(itemslist.length > 0) ? (<div>
                            <table className="table table-striped table-hover">
                                <thead className="text-info">
                                    <tr>
                                        <th>Grupo</th>
                                        <th>Profesor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody >{itemslist}</tbody>
                            </table></div>
                        ) : <p className="text-danger">No existe ningún grupo, haga click en el botón Nuevo Grupo</p>}
                    </div>
                </section>
            }
        </div>
    }

    render() {
        return (
            <div>
                <Navigation>
                    <NavItem>
                        <NavLink className="text-white" href="/groups/" onClick={this.handleClick}>Grupos</NavLink>
                    </NavItem></Navigation>
                <Layout>
                     
                </Layout>
            </div>

        )
    }
}

export default MainContainer;