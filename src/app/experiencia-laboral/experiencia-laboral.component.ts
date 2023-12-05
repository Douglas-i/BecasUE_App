import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudiosService } from '../services/estudios.service';
import { ExperienciaLaboralCDTO } from '../Interface/estudiosAcademicos';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  experienciaForm: FormGroup;

  constructor(private fb: FormBuilder, private estudiosService: EstudiosService, private router: Router) {}

  ngOnInit() {
    this.experienciaForm = this.fb.group({
      puesto: ['', Validators.required],
      entidadTrabajo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.experienciaForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosExperiencia: ExperienciaLaboralCDTO = {
        puesto: this.experienciaForm.value.puesto,
        entidadTrabajo: this.experienciaForm.value.entidadTrabajo,
        fechaInicio: this.experienciaForm.value.fechaInicio,
        fechaFinalizacion: this.experienciaForm.value.fechaFinalizacion,
        personaID: "1"
      };
      console.log(datosExperiencia);
      this.estudiosService.crearExperiencia(datosExperiencia).subscribe(data => {
        console.log(data);
      });     

      this.router.navigate(['/inicio'])
    }    
  }

}
