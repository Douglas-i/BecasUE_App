import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertaAnualCDTO, OfertaAnualDTO } from '../Interface/OfertaAnual';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaAnualService {

  constructor(private http: HttpClient) { }

  //Crear persona
  public crearOfertaAnual(form: OfertaAnualCDTO) {
    const apiURL = environment.apiURL + 'OfertaAnual'; 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Llego al servicio y mando esto: " + form);
    return this.http.post(apiURL, form, httpOptions);
  }

  public obtenerOferta() : Observable<OfertaAnualDTO[]> {
    const apiURL = environment.apiURL + 'OfertaAnual'; 
    return this.http.get<OfertaAnualDTO[]>(apiURL);
  }
}
