import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { EstudiosAcademicosCDTO, EstudiosAcademicosDTO, ExperienciaLaboralCDTO, ExperienciaLaboralDTO } from '../Interface/estudiosAcademicos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http: HttpClient) { }

  public crearEstudios(form: EstudiosAcademicosCDTO) {
    const apiURL = environment.apiURL + 'EstudiosAcademicos'; 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Llego al servicio y mando esto: " + form);
    return this.http.post(apiURL, form, httpOptions);
  }

  public obtenerEstudios() : Observable<EstudiosAcademicosDTO[]> {
    const apiURL = environment.apiURL + 'EstudiosAcademicos'; 
    return this.http.get<EstudiosAcademicosDTO[]>(apiURL);
  }

  public crearExperiencia(form: ExperienciaLaboralCDTO) {
    const apiURL = environment.apiURL + 'ExperienciaLaboral'; 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Llego al servicio y mando esto: " + form);
    return this.http.post(apiURL, form, httpOptions);
  }

  public obtenerExperiencia() : Observable<ExperienciaLaboralDTO[]> {
    const apiURL = environment.apiURL + 'ExperienciaLaboral'; 
    return this.http.get<ExperienciaLaboralDTO[]>(apiURL);
  }
}
