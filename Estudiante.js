import { Persona } from "./Persona";

class Estudiante extends Persona {
    constructor(nombre, apellido, numeroIdentificacion, estadoCivil, cursoMatriculado){

        super(nombre, apellido, numeroIdentificacion, estadoCivil);

        this.cursoMatriculado = cursoMatriculado;
    }

    get CursoMatriculado(){
        return this.cursoMatriculado;

    }
}