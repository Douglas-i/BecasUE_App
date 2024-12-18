import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudProgramaCDTO, SolicitudProgramaDTO, SolicitudProgramaDTOv2, SolicitudesAceptadas } from '../Interface/solicitudPrograma';
import { Router } from '@angular/router';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';
import { ModalProgramaComponent } from '../modal-programa/modal-programa.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aceptar-programas',
  templateUrl: './aceptar-programas.component.html',
  styleUrls: ['./aceptar-programas.component.css']
})
export class AceptarProgramasComponent {

  form: FormGroup;
  solicitudesProgramas: SolicitudProgramaDTO[];
  solicitudesVista: SolicitudProgramaDTOv2[] = [];
  solicitudesAceptadas: SolicitudProgramaDTO[];
  programaSeleccionado: SolicitudProgramaDTOv2;

  constructor(private router: Router, private formBuilder: FormBuilder, private solicitudPorgramaService: SolicitudProgramasService, public dialog: MatDialog, private userService: UserService){}

  ngOnInit(): void {
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesProgramas = solicitudes.filter(x => x.estado == "En revision");

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

          this.solicitudesVista.push(solicitudV2);
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

          this.solicitudesVista.push(solicitudV2);
        }
      })      
    });

    //Obtener solicitudes aceptadas
    this.solicitudPorgramaService.obtenerSolicitudesProgramas().subscribe(solicitudes => {
      this.solicitudesAceptadas = solicitudes.filter(x => x.estado == "Aceptado");
    });

    console.log(this.userService.getUsuario());
  }

  aceptarSolicitud(programa: SolicitudProgramaDTOv2){

    let idPersona;

    if(programa.personaId == "Douglas") {
      idPersona = 1;
    }
    const datosSolicitud: SolicitudProgramaCDTO = {
      fechaSolicitud: programa.fechaSolicitud,
      personaId: idPersona,
      programaOfertadoId: 1,
      resumen: programa.resumen,
      estado: "Aceptado"
    }
    this.solicitudPorgramaService.actualizarSolicitud(programa.solicitudId, datosSolicitud).subscribe( data => {
      console.log(data);
    })

     Swal.fire({
      icon: 'success',
      title: 'Aprobado exitosamente',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Redirige a la página de dashboard después de la alerta
      this.router.navigate(['/aceptarProgramas']);
    });
    // Recargar la página después de completar la solicitud
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/aceptarProgramas']);
    });
  }


  abrirModal(programa: SolicitudProgramaDTOv2): void {
    this.programaSeleccionado = programa;

    console.log('Abriendo modal para:', programa);

   const dialogRef = this.dialog.open(ModalProgramaComponent, {
      width: '400px',
      data: { programa: programa }
   });

   dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
      this.programaSeleccionado = null;
    });
  }

  cerrarModal(): void {
    this.dialog.closeAll();
  }


}
