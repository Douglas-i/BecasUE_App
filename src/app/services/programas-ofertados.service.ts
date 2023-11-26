import { Injectable } from '@angular/core';
import { ProgramasOfertadosDTO } from '../Interface/programasOfertados';

@Injectable({
  providedIn: 'root'
})
export class ProgramasOfertadosService {

  constructor() { }

  public obtenerProgramasOfertados():ProgramasOfertadosDTO[] {
    return [{Programa: "Prueba de Servicio"}]
  }
}
