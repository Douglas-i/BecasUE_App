import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudProgramaDTO, SolicitudProgramaDTOv2 } from '../Interface/solicitudPrograma';
import { Router } from '@angular/router';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';
import { EstudiosAcademicosDTO } from '../Interface/estudiosAcademicos';
import { EstudiosService } from '../services/estudios.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  form: FormGroup;
  solicitudesProgramas: SolicitudProgramaDTO[];
  solicitudes: SolicitudProgramaDTOv2[] = [];
  solicitudesAceptadas: SolicitudProgramaDTO[];
  estudiosAcademicos: EstudiosAcademicosDTO[];

  constructor(private router: Router, private formBuilder: FormBuilder, private solicitudPorgramaService: SolicitudProgramasService, private estudiosService: EstudiosService, private userService: UserService){}

  ngOnInit(): void {
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesProgramas = solicitudes.filter(x => x.estado == "En revision" && x.personaId == 1);

      this.solicitudesProgramas.forEach(solicitud => {

        if(solicitud.personaId == 1) {
          const solicitudV2: SolicitudProgramaDTOv2 = {
            // Asigna los valores correspondientes
            solicitudId: solicitud.solicitudId,
            fechaSolicitud: solicitud.fechaSolicitud,
            personaId: "Douglas",
            programaOfertadoId: solicitud.programaOfertadoId,
            resumen: solicitud.resumen,
            estado: solicitud.estado
          };

          this.solicitudes.push(solicitudV2);
        } else if(solicitud.personaId == 3) {
          const solicitudV2: SolicitudProgramaDTOv2 = {
            // Asigna los valores correspondientes
            solicitudId: solicitud.solicitudId,
            fechaSolicitud: solicitud.fechaSolicitud,
            personaId: "Rafael",
            programaOfertadoId: solicitud.programaOfertadoId,
            resumen: solicitud.resumen,
            estado: solicitud.estado
          };

          this.solicitudes.push(solicitudV2);
        }
      })
  
      console.log(this.userService.getUsuario());
    });

    //Obtener solicitudes aceptadas
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesAceptadas = solicitudes.filter(x => x.estado == "Aceptado");
    });

    this.estudiosService.obtenerEstudios().subscribe(data => {
      this.estudiosAcademicos = data;
    })
    
  }

  aceptarSolicitud(programa: SolicitudProgramaDTO){
    this.solicitudPorgramaService.aceptarSolicitudPrograma(programa.solicitudId, programa.resumen).subscribe(
      data => {
        console.log(data);
      }
    );
  }
  
}
