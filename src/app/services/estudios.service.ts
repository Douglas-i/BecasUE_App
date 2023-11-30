import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { EstudiosAcademicosCDTO } from '../Interface/estudiosAcademicos';

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

  // public obtenerUniversidad() : Observable<UniversidadDTO[]> {
  //   const apiURL = environment.apiURL + 'Universidad'; 
  //   return this.http.get<UniversidadDTO[]>(apiURL);
  // }
}
