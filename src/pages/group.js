import React from 'react';
import { professors } from "./../db/data.json"
import Form from './../components/form'

class GroupList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            professors: professors,
            proffesorOption: ''
        }
    }

    onNewGroup() {
        this.setState({
            professors: [
                ...this.state.professors,
                {
                    id: Date.now(),
                    name: this.refs.theTextNameInput.value,
                    professorId: this.refs.ProffesorSelect.id,
                },
            ],
        })
    }
    onCreateStudent = () => {
        let proffesorslist = professors.map(item =>
            <option value={item.name} key={item.id}>{item.name}</option>
        )
        this.setState({
            professors: proffesorslist,
        })
    }

    handleProfSelect = () => {
        this.setState(
            { proffesorOption: this.refs.ProffesorSelect.value }
        );
    };


    render() {
        const { proffesorOption } = this.state
        return (
            <div className="group-item-create col-md-6" align="center">
                <h5>Crear Grupo</h5>
                <Form>
                    <input className="form-control" type="text" placeholder="Nombre" ref="NameInput" />
                    <select className="" value={proffesorOption}
                        ref="ProffesorSelect"
                        onChange={this.handleProfSelect}>{professors}
                    </select>
                    <button
                        onClick={this.onNewGroup}
                        className="form-control btn btn-success btn-sm">Agregar Grupo
                        </button>
                </Form>
            </div>
        )
    }
}

export default GroupList;