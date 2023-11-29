import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent{

  universidadForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.universidadForm = this.fb.group({
      nombreUniversidad: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }
  
}
