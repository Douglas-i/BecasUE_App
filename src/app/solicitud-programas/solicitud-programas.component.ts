import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudProgramaCDTO } from '../Interface/solicitudPrograma';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';

@Component({
  selector: 'app-solicitud-programas',
  templateUrl: './solicitud-programas.component.html',
  styleUrls: ['./solicitud-programas.component.css']
})
export class SolicitudProgramasComponent implements OnInit{

  constructor(private router: Router, private formBuilder: FormBuilder, private programasOfertadosService: ProgramasOfertadosService){}

  form: FormGroup;

  // submit: EventEmitter<SolicitudProgramaCDTO> = new EventEmitter<SolicitudProgramaCDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      resumen: ['', {
        validators: [Validators.required]
      }],
      fecha: ''
    });

    const programasOfertados = this.programasOfertadosService.obtenerProgramasOfertados();
    console.log(programasOfertados);
  }

  guardarCambios() {
    console.log(this.form.value)
    this.router.navigate(['/inicio'])    
  }
}
