import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudProgramaDTO } from '../Interface/solicitudPrograma';
import { Router } from '@angular/router';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';

@Component({
  selector: 'app-aceptar-programas',
  templateUrl: './aceptar-programas.component.html',
  styleUrls: ['./aceptar-programas.component.css']
})
export class AceptarProgramasComponent {

  form: FormGroup;
  solicitudesProgramas: SolicitudProgramaDTO[];

  constructor(private router: Router, private formBuilder: FormBuilder, private solicitudPorgramaService: SolicitudProgramasService){}

  ngOnInit(): void {
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesProgramas = solicitudes;      
      // console.log(solicitudes);
      // console.log(this.solicitudesProgramas.find(x => x.solicitudId = 3));
    }); 
    
  }

  aceptarSolicitud(programa: SolicitudProgramaDTO){
    this.solicitudPorgramaService.aceptarSolicitudPrograma(programa.solicitudId, programa.resumen).subscribe(
      data => {
        console.log(data);
      }
    );

    this.router.navigate(['/aceptarProgramas']);
  }
  
}
