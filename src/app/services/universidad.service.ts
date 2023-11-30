import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversidadCDTO, UniversidadDTO } from '../Interface/Universidad';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  constructor(private http: HttpClient) { }

  //Crear persona
  public crearUniversidad(form: UniversidadCDTO) {
    const apiURL = environment.apiURL + 'Universidad'; 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Llego al servicio y mando esto: " + form);
    return this.http.post(apiURL, form, httpOptions);
  }

  public obtenerUniversidad() : Observable<UniversidadDTO[]> {
    const apiURL = environment.apiURL + 'Universidad'; 
    return this.http.get<UniversidadDTO[]>(apiURL);
  }
}
