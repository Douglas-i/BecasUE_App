import { Injectable } from '@angular/core';
import { ProgramasOfertadoCDTO, ProgramasOfertadosDTO } from '../Interface/programasOfertados';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramasOfertadosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL+'ProgramasOfertados';

  public obtenerProgramasOfertados() : Observable<ProgramasOfertadosDTO[]> {
    return this.http.get<ProgramasOfertadosDTO[]>(this.apiURL);
  }

   //Crear persona
   public crearProgramaOfertado(form: ProgramasOfertadoCDTO) {
    const apiURL = environment.apiURL + 'ProgramasOfertados'; 

    const json = JSON.stringify({
      fechaInicio: form.fechaInicio,
      fechaFinalazacion: form.fechaFinalizacion,
      montoAprobado: form.montoAprobado,
      financiamiento: form.financiamiento,
      programaId: form.programasTitualcion,
      ofertaId: form.ofertaAnual,
      universidadId: form.universidad
    })
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Llego al servicio y mando esto: " + json);
    return this.http.post(apiURL, json, httpOptions);
  }

}
