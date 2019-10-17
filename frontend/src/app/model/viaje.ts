import { Vehiculo } from './vehiculo';
export class Viaje {
    id: number;
    cupo: number;
    direccionInicial: string;
    direccionFinal: string;
    horaSalida: string;
    precio: string;
    vehiculo: Vehiculo;
}
