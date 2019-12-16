import React from 'react';

class GroupList extends React.Component{
    handleClick(){
        
    }


    render(){
        return(
            <div className="student-item-create col-md-6" align="center">
                 <h5>Crear Grupo</h5>
                    <Form>
                        <input className="form-control" type="text" placeholder="Nombre" ref="theTextNameInput" />
                        <input className="form-control" type="text" placeholder="Email" ref="theTextEmailInput" />
                        <input className="form-control" type="number" placeholder="Edad" ref="theTextEdadInput" />
                        <input className="form-control" type="text" placeholder="Sexo" ref="theTextSexoInput" />
                        <input className="form-control" type="text" placeholder="Fecha de Nacimiento"
                            ref="theTextFecNacInput" />
                        <input className="form-control" type="text" placeholder="Lugar de Nacimiento"
                            ref="theTextLugNacInput" />
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
        )
    }

}