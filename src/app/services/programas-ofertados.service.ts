import { Injectable } from '@angular/core';
import { ProgramasOfertadosDTO } from '../Interface/programasOfertados';
import { HttpClient } from '@angular/common/http';
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
}
