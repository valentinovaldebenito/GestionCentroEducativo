import { Empleado } from "./Empleado";

class Profesor extends Empleado {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho, departamento){
        super(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho);

        this.departamento = departamento;
    }
}