import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudProgramaDTO, SolicitudProgramaDTOv2 } from '../Interface/solicitudPrograma';
import { Router } from '@angular/router';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';
import { EstudiosAcademicosDTO, ExperienciaLaboralDTO } from '../Interface/estudiosAcademicos';
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
  experiencialLaboral: ExperienciaLaboralDTO[];

  constructor(private router: Router, private formBuilder: FormBuilder, private solicitudPorgramaService: SolicitudProgramasService, private estudiosService: EstudiosService, private userService: UserService){}

  ngOnInit(): void {
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesProgramas = solicitudes.filter(x => x.estado == "En revision" && x.personaId == 1);

      this.solicitudesProgramas.forEach(solicitud => {

        const paises = [
          'Doctorado en Ciencias de la Computación', 'MBA', 'Maestría en Ingeniería Eléctrica',
          'Doctorado en Historia', 'MSc en Inteligencia Artificial', 'Maestría en Economía',
          'Doctorado en Biología Molecular', 'Maestría en Estudios Latinoamericanos', 'Maestría en Derecho',
          'Doctorado en Psicología', 'Juris Doctor (JD)', 'Maestría en Administración Pública',
          'Doctorado en Física Cuántica', 'MBA en Negocios Internacionales', 'Maestría en Ingeniería Civil',
          'Doctorado en Medicina', 'Master of Arts in Linguistics', 'Maestría en Ciencias Ambientales',
          'Doctorado en Ingeniería Mecánica', 'Master of Science in Robotics', 'Maestría en Gestión de Tecnologías de la Información'
      ];
        const indiceAleatorio = Math.floor(Math.random() * paises.length);

        if(solicitud.personaId == 1) {
          const solicitudV2: SolicitudProgramaDTOv2 = {
            // Asigna los valores correspondientes
            solicitudId: solicitud.solicitudId,
            fechaSolicitud: solicitud.fechaSolicitud,
            personaId: "Douglas",
            programaOfertadoId: paises[indiceAleatorio].toString(),
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
            programaOfertadoId: paises[indiceAleatorio].toString(),
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

    //Obtener Estudios
    this.estudiosService.obtenerEstudios().subscribe(data => {
      this.estudiosAcademicos = data;
    })

    this.estudiosService.obtenerExperiencia().subscribe(data => {
      this.experiencialLaboral = data;
      console.log(this.experiencialLaboral);
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
