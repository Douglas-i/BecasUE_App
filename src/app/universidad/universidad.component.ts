import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversidadService } from '../services/universidad.service';
import { UniversidadCDTO, UniversidadDTO } from '../Interface/Universidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent{

  universidadForm: FormGroup;
  universidadesList: any[] = [];

  constructor(private fb: FormBuilder, private universidadService: UniversidadService, private router: Router) {}

  ngOnInit() {
    this.universidadForm = this.fb.group({
      nombreUniversidad: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    //Obtener la universidades
    this.universidadService.obtenerUniversidad().subscribe( data => {
      this.universidadesList = data;    
      console.log(this.universidadesList);
    });
  }
  
  agregarUniversidad() {
    this.router.navigate(['/agregarUniversidad']);
  }
}
