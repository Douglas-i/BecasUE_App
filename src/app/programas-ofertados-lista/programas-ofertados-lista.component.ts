import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';

@Component({
  selector: 'app-programas-ofertados-lista',
  templateUrl: './programas-ofertados-lista.component.html',
  styleUrls: ['./programas-ofertados-lista.component.css']
})
export class ProgramasOfertadosListaComponent {

  programasOfertadosList: any[] = [];

  constructor(private router: Router, private programasOfertadosService: ProgramasOfertadosService){}

  ngOnInit() {

    this.programasOfertadosService.obtenerProgramasOfertados().subscribe( data => {
      this.programasOfertadosList = data;          
    });
  }

  agregarPrograma() {
    this.router.navigate(['/programaOfertados']);
  }
}
