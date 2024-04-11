import { Persona } from "./Persona";

class Empleado extends Persona{
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho){
        super(nombre, apellidos, numeroIdentificacion, estadoCivil);

        this.anoIncorporacion = anoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }

    get AnoIncorporacion(){
        return this.anoIncorporacion;
    }

    get NumeroDespacho(){
        return this.NumeroDespacho;
    }
}