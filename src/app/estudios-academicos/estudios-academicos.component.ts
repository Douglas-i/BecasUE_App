import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudiosService } from '../services/estudios.service';
import { EstudiosAcademicosCDTO } from '../Interface/estudiosAcademicos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios-academicos',
  templateUrl: './estudios-academicos.component.html',
  styleUrls: ['./estudios-academicos.component.css']
})
export class EstudiosAcademicosComponent {

  estudiosForm: FormGroup;

  constructor(private fb: FormBuilder, private estudiosService: EstudiosService, private router: Router) {}

  ngOnInit() {
    this.estudiosForm = this.fb.group({
      tituloObtenido: ['', Validators.required],
      entidadEmisora: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.estudiosForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosEstudios: EstudiosAcademicosCDTO = {
        tituloObtenido: this.estudiosForm.value.tituloObtenido,
        entidadEmisora: this.estudiosForm.value.entidadEmisora,
        fechaInicio: this.estudiosForm.value.fechaInicio,
        fechaFinalizacion: this.estudiosForm.value.fechaFinalizacion,
        personaID: 1
      };
      console.log(datosEstudios);
      this.estudiosService.crearEstudios(datosEstudios).subscribe(data => {
        console.log(data);
      });     

      this.router.navigate(['/inicio'])
    }    
  }

}
