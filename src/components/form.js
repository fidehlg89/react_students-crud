import React from "react"

function Form() {
    return (
        <form>
            <span className="label">Nuevo Estudiante</span>
            <input
                type="text"
                placeholder="Enter Company Name"
                required
            />
            <button>Enviar</button>
        </form>
    )
}

export default Form;