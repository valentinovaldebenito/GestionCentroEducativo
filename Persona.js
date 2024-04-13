export class Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroIdentificacion = numeroIdentificacion;
        this.estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil(estadoCivil){
        estadoCivil = this.estadoCivil
        let nuevoEstadoCivil 
        
        setEstadoCivil = (estadoCivil) => {
            estadoCivil = nuevoEstadoCivil;
        }

    }
}

//LA CLASE PERSONA TIENE QUE TENER EL METODO "CAMBIAR ESTADO CIVIL"

//METODO TO STRING CONCATENA DATOS

// LA CLASE CENTRO EDUCATIVO TIENE QUE TENER EL METODO "ALTA PERSONA - BAJA PERSONA - MODIFICACION PERSONA"