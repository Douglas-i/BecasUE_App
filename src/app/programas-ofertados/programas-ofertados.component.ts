import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';
import { ProgramasOfertadoCDTO, ProgramasOfertadosDTO } from '../Interface/programasOfertados';
import { UniversidadService } from '../services/universidad.service';
import { OfertaAnualService } from '../services/oferta-anual.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programas-ofertados',
  templateUrl: './programas-ofertados.component.html',
  styleUrls: ['./programas-ofertados.component.css']
})
export class ProgramasOfertadosComponent {

  programasOfertadosForm: FormGroup;
  universidadesList: any[] = [];
  ofertaList: any[] = [];
  programaList: any[] = [];

  constructor(private fb: FormBuilder, private programaOferadoService: ProgramasOfertadosService, private universiadades: UniversidadService, private ofertaService: OfertaAnualService, private router: Router) {}

  ngOnInit() {
    this.programasOfertadosForm = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
      montoAprobado: ['', Validators.required],
      financiamiento: ['', Validators.required],
      programa: ['', Validators.required],
      ofertaId: ['', Validators.required],
      universidad: ['', Validators.required]
    });

    //Obtener la universidades
    this.universiadades.obtenerUniversidad().subscribe( data => {
      this.universidadesList = data;      
    });

    //obtener las Ofertas
    this.ofertaService.obtenerOferta().subscribe(data => {
      this.ofertaList = data;      
    })

    //obtener los programas
  }
  
  onSubmit() {
    // if (this.programasOfertadosForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosProgramasOfertado: ProgramasOfertadoCDTO = {
        fechaInicio: this.programasOfertadosForm.value.fechaInicio,
        fechaFinalizacion: this.programasOfertadosForm.value.fechaFinalizacion,
        montoAprobado: parseInt(this.programasOfertadosForm.value.montoAprobado),
        financiamiento: 1,//parseInt(this.programasOfertadosForm.value.financiamiento),
        programasTitualcion: parseInt(this.programasOfertadosForm.value.programa),
        ofertaAnual: parseInt(this.programasOfertadosForm.value.ofertaId),
        universidad: parseInt(this.programasOfertadosForm.value.universidad)
      };
      console.log(datosProgramasOfertado)
      this.programaOferadoService.crearProgramaOfertado(datosProgramasOfertado).subscribe();     
    // }    

    Swal.fire({
      icon: 'success',
      title: 'Guardado exitosamente',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Redirige a la página de dashboard después de la alerta
      this.router.navigate(['/menu'])
    });
    // this.router.navigate(['/menu'])
  }
}
