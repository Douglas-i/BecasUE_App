import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfertaAnualService } from '../services/oferta-anual.service';
import { Router } from '@angular/router';
import { OfertaAnualCDTO } from '../Interface/OfertaAnual';

@Component({
  selector: 'app-agregar-oferta-anual',
  templateUrl: './agregar-oferta-anual.component.html',
  styleUrls: ['./agregar-oferta-anual.component.css']
})

export class AgregarOfertaAnualComponent {

  ofertaAnualForm: FormGroup;

  constructor(private fb: FormBuilder, private ofertaService: OfertaAnualService, private router: Router) {}

  ngOnInit() {
    this.ofertaAnualForm = this.fb.group({
      año: ['', Validators.required],
      fechaApertura: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
      numeroUniversidades: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.ofertaAnualForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosOfertaAnual: OfertaAnualCDTO = {
        anio: parseInt(this.ofertaAnualForm.value.año),
        fechaApertura: this.ofertaAnualForm.value.fechaApertura,
        fechaCierre: this.ofertaAnualForm.value.fechaCierre,
        numeroUniversidades: this.ofertaAnualForm.value.numeroUniversidades,
        fechaCreacion: new Date().toISOString(),
        paisSedePrograma: this.ofertaAnualForm.value.pais,
        estado: this.ofertaAnualForm.value.estado
      };
      console.log(datosOfertaAnual);
      this.ofertaService.crearOfertaAnual(datosOfertaAnual).subscribe();

      this.router.navigate(['/OfertaAnual']);
    }    
  }
}