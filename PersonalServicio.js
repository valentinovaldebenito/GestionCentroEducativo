import { Empleado } from "./Empleado";

class PersonalServicio extends Empleado{
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho, seccionAsignada){
        super(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho);

        this.seccionAsignada = seccionAsignada;
    }

    get SeccionAsignada(){
        return this.seccionAsignada;
    }       
}