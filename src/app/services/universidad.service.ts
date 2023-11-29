import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversidadCDTO } from '../Interface/Universidad';
import { environment } from 'src/environments/environment.development';

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
}
