import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row container">
        <h6>Nuevo Estudiante:</h6>
        <form className="form-group" align="center">
          <label>
            Nombre:
          <input type="text" name="name" className="form-control"/>
          </label>
          <label>
            email:
          <input type="email" name="email" className="form-control"/>
          </label>
          <label>
            Edad:
          <input type="number" name="age" className="form-control"/>
          </label>
          <label>
            Sexo:
            <input type="radio" name="sexo" className="form-control" value="M"/>
	          <input type="radio" name="sexo" className="form-control" value="F"/>
          </label>
          <input type="submit" value="Enviar" className="form-control btn btn-primary"/>
        </form>
      </div>

    </div>
  );
}

export default App;
