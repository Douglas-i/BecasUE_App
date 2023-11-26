import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudProgramaCDTO } from '../Interface/solicitudPrograma';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';
import { ProgramasOfertadosDTO } from '../Interface/programasOfertados';

@Component({
  selector: 'app-solicitud-programas',
  templateUrl: './solicitud-programas.component.html',
  styleUrls: ['./solicitud-programas.component.css']
})
export class SolicitudProgramasComponent implements OnInit{

  constructor(private router: Router, private formBuilder: FormBuilder, private programasOfertadosService: ProgramasOfertadosService){}

  form: FormGroup;
  programasOfertados: ProgramasOfertadosDTO[];
  programaSeleccionado: ProgramasOfertadosDTO | null = null;
  // columnasAMostrar: ['programaOfertadoId', 'fechaInicio', 'acciones'];

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      resumen: ['', {
        validators: [Validators.required]
      }],
      fecha: ''
    });

    this.programasOfertadosService.obtenerProgramasOfertados().subscribe(programasOfertados => {
      this.programasOfertados = programasOfertados;
      console.log(this.programasOfertados);
    });
  }

  seleccionarPrograma(programa: ProgramasOfertadosDTO): void {
    this.programaSeleccionado = programa;
  }

  reiniciarSeleccion(): void {
    this.programaSeleccionado = null;
  }
  
  guardarCambios() {
    console.log(this.form.value)
    this.router.navigate(['/inicio'])    
  }
}
