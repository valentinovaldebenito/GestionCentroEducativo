import { Persona } from "/ITS/SEGUNDO AÑO/PROGRAMACION BACKEND/TP OBLIGATORIO/Persona";

class Empleado extends Persona{
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, anoIncorporacion, numeroDespacho){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroIdentificacion = numeroIdentificacion;
        this.estadoCivil = estadoCivil;
        this.anoIncorporacion = anoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }
}
