class Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroIdentificacion = numeroIdentificacion;
        this.estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil(nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
    }

    imprimirInformacion() {
        console.log(`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Número de Identificación: ${this.numeroIdentificacion}, Estado Civil: ${this.estadoCivil}`);
    }
}


class Empleado extends Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDeDespacho) {
        super(nombre, apellidos, numeroIdentificacion, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numeroDeDespacho = numeroDeDespacho;
    }

    reasignarDespacho(nuevoDespacho) {
        this.numeroDeDespacho = nuevoDespacho;
    } 
}


class Estudiante extends Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, cursoMatriculado) {
        super(nombre, apellidos, numeroIdentificacion, estadoCivil);
        this.cursoMatriculado = cursoMatriculado;
    }

    cambiarCurso(nuevoCurso) {
        this.cursoMatriculado = nuevoCurso;
    }
}


class Profesor extends Empleado {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDeDespacho, departamento) {
        super(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDeDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
    }
}


class PersonalServicio extends Empleado {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDeDespacho, seccionAsignada) {
        super(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDeDespacho);
        this.seccionAsignada = seccionAsignada;
    }

    cambiarSeccion(nuevaSeccion) {
        this.seccionAsignada = nuevaSeccion;
    }
}


class CentroEducativo {
    constructor() {
        this.personas = [];
    }

    alta(persona) {
        this.personas.push(persona);
    }

    baja(numeroIdentificacion) {
        const index = this.personas.findIndex(persona => persona.numeroIdentificacion === numeroIdentificacion);
        if (index !== -1) {
            this.personas.splice(index, 1);
        }
    }

    imprimirInformacion() {
        this.personas.forEach(persona => {
            console.log(`Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Número de Identificación: ${persona.numeroIdentificacion}`);
        });
    }
}