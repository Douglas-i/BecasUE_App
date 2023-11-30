import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SolicitudProgramaCDTO, SolicitudProgramaDTO } from '../Interface/solicitudPrograma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudProgramasService {

  constructor(private http: HttpClient) { }  

  public obtenerSolicitudesProgramas() : Observable<SolicitudProgramaDTO[]> {
    const apiURL = environment.apiURL + 'SolicitudesProgramas';
    return this.http.get<SolicitudProgramaDTO[]>(apiURL);
  }

  //Crear Programa
  public crerPrograma(form: SolicitudProgramaCDTO) {
    const apiURL = environment.apiURL + 'SolicitudesProgramas';
    return this.http.post(apiURL, form);
  }

  public aceptarSolicitudPrograma(IdSolicitud: number, fecha: string) {
    const apiURL = environment.apiURL + 'SolicitudesAceptadas';
    const json = JSON.stringify({fechaAceptacion: "2023-11-21T05:43:49.233", solicitudID: IdSolicitud})    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    return this.http.post(apiURL, json, httpOptions);
  }
}
