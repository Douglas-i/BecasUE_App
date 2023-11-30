import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudProgramaCDTO } from '../Interface/solicitudPrograma';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';
import { ProgramasOfertadosDTO } from '../Interface/programasOfertados';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';

@Component({
  selector: 'app-solicitud-programas',
  templateUrl: './solicitud-programas.component.html',
  styleUrls: ['./solicitud-programas.component.css']
})
export class SolicitudProgramasComponent implements OnInit{

  constructor(private router: Router, private formBuilder: FormBuilder, private programasOfertadosService: ProgramasOfertadosService, private solicitudProgramaService: SolicitudProgramasService){}

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
    const datosSolicitud: SolicitudProgramaCDTO = {
      resumen: this.form.value.resumen,
      fechaSolicitud: new Date().toISOString(),//this.form.value.fecha,
      estado: "En revision",
      personaId: 1,
      programaOfertadoId: this.programaSeleccionado.programaOfertadoId
    }

    console.log(datosSolicitud);

    this.solicitudProgramaService.crerPrograma(datosSolicitud).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/inicio'])    
  }
}
