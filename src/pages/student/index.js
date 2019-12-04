import React from "react";
import Layout from "./../../components/layout"
import './style.css'

class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.onNewStudent = this.onNewStudent.bind(this);
    }

    onNewStudent() {
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: Date.now(),
                    name: 'Fidel',
                    edad: '28',
                    email: 'fidel@mail.com',
                    sexo: 'M',
                    born: Date.now(),
                    place: '',
                },
            ]
        })
    }

    onDeleteStudent=(student)=> {
        const {items}=this.state;
        const index=items.findIndex(n=>n.id===student.id);

        if(index===-1){
            return;
        }

        const newItems=items.slice();
        newItems.splice(index, 1);

        this.setState({
            items:newItems
        });

    }


    renderDefaultview = () => {
        const { items } = this.state;
        let itemslist = items.map(item =>
            <tr className="item-list">
                <th className="">
                    {item.id}
                </th>
                <th className="">
                    {item.name}
                </th>
                <th className="">
                    {item.edad}
                </th>
                <th className="" >
                    {item.email}
                </th>
                <th className="">
                    {item.sexo}
                </th>
                <th className="">
                    <button className="btn btn-default btn-sm" onClick={() => this.changeEditMode(item.id - 1)}>Edit
                    </button>

                    <button className="btn btn-default btn-sm" onClick={() => this.onDeleteStudent(item)}>Delete
                    </button>
                    
                </th>
            </tr>
        )
        return <div>
            {
                <div>
                    <Layout>
                        <div className="">
                            <h5>Listado de Estudiantes</h5>
                            <button className="new-student-item btn btn-primary btn-sm" onClick={this.onNewStudent}>
                                Nuevo Estudiante
                            </button>
                            <table className="table table-responsive table-hover table-striped">
                                <tbody>{itemslist}</tbody>
                            </table>
                        </div>
                    </Layout>
                </div>
            }
        </div>
    }
    render() {
        return (
            this.renderDefaultview()
        )
    }
}

export default StudentList;