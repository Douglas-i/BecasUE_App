import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversidadService } from '../services/universidad.service';
import { UniversidadCDTO } from '../Interface/Universidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent{

  universidadForm: FormGroup;

  constructor(private fb: FormBuilder, private universidadService: UniversidadService, private router: Router) {}

  ngOnInit() {
    this.universidadForm = this.fb.group({
      nombreUniversidad: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.universidadForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosUniversidad: UniversidadCDTO = {
        universidadNombre: this.universidadForm.value.nombreUniversidad,
        pais: this.universidadForm.value.pais,
        ciudad: this.universidadForm.value.ciudad,
        direccion: this.universidadForm.value.direccion,
        telefono: this.universidadForm.value.telefono
      };
      
      this.universidadService.crearUniversidad(datosUniversidad).subscribe();     

      this.router.navigate(['/aceptarProgramas']);
    }    
  }
}
