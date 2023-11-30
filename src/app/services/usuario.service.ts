import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PersonaCDTO, PersonaDTO, UsuarioCDTO } from '../Interface/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Crear persona
  public crearPersona(form: PersonaCDTO) {
    const apiURL = environment.apiURL + 'Persona'; 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };

    console.log("Creando la persona")
    return this.http.post(apiURL, form, httpOptions);
  }

  //Obtener Persona
  public obtenerPersona() : Observable<PersonaDTO[]> {
    const apiURL = environment.apiURL + 'Persona';
    return this.http.get<PersonaDTO[]>(apiURL);
  }

  //Crear Usuario
  public crearUsuario(form: UsuarioCDTO) {
    const apiURL = environment.apiURL + 'Usuario';
    return this.http.post(apiURL, form);
  }
}
