import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversidadService } from '../services/universidad.service';
import { OfertaAnualService } from '../services/oferta-anual.service';
import { OfertaAnualCDTO } from '../Interface/OfertaAnual';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferta-anual',
  templateUrl: './oferta-anual.component.html',
  styleUrls: ['./oferta-anual.component.css']
})
export class OfertaAnualComponent {

  ofertaAnualForm: FormGroup;
  ofertaAnualList: any[] = [];

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

    this.ofertaService.obtenerOferta().subscribe( data => {
      this.ofertaAnualList = data;    
      console.log(this.ofertaAnualList);
    });
  }
  
  agregarOferta() {
    this.router.navigate(['/agregarOferta']);
  }
}