import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudProgramaCDTO } from '../Interface/solicitudPrograma';
import { ProgramasOfertadosService } from '../services/programas-ofertados.service';
import { ProgramasOfertadosDTO } from '../Interface/programasOfertados';
import { SolicitudProgramasService } from '../services/solicitud-programas.service';
import { DetallesProgramaComponent } from '../detalles-programa/detalles-programa.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-programas',
  templateUrl: './solicitud-programas.component.html',
  styleUrls: ['./solicitud-programas.component.css']
})
export class SolicitudProgramasComponent implements OnInit{

  constructor(private router: Router, private formBuilder: FormBuilder, private programasOfertadosService: ProgramasOfertadosService, private solicitudProgramaService: SolicitudProgramasService, public dialog: MatDialog){}

  form: FormGroup;
  programasOfertados: ProgramasOfertadosDTO[];
  programaSeleccionado: ProgramasOfertadosDTO | null = null;
  // columnasAMostrar: ['programaOfertadoId', 'fechaInicio', 'acciones'];

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      resumen: ['', {
        validators: [Validators.required]
      }],
      fecha: ''
    });

    this.programasOfertadosService.obtenerProgramasOfertados().subscribe(programasOfertados => {
      this.programasOfertados = this.actualizarInformacion(programasOfertados);
      console.log(this.programasOfertados);
    });
  }

  seleccionarPrograma(programa: ProgramasOfertadosDTO): void {
    this.programaSeleccionado = programa;
  }

  reiniciarSeleccion(): void {
    this.programaSeleccionado = null;
  }
  
  guardarCambios() {
    const datosSolicitud: SolicitudProgramaCDTO = {
      resumen: this.form.value.resumen,
      fechaSolicitud: new Date().toISOString(),//this.form.value.fecha,
      estado: "En revision",
      personaId: 1,
      programaOfertadoId: this.programaSeleccionado.programaOfertadoId
    }

    console.log(datosSolicitud);

    this.solicitudProgramaService.crerPrograma(datosSolicitud).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/inicio'])    
  }

  //Modal
  abrirModal(programa: ProgramasOfertadosDTO): void {
    const dialogRef = this.dialog.open(DetallesProgramaComponent, {
      width: '400px',
      data: { programa: programa }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }

   // Funciones para obtener valores aleatorios
   private obtenerElementoAleatorio<T>(array: T[]): T {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }

  private actualizarInformacion(programasOfertados: ProgramasOfertadosDTO[]): ProgramasOfertadosDTO[] {
    return programasOfertados.map(programa => {
      programa.universidad = this.obtenerElementoAleatorio(['Universidad de Stanford', 'Universidad de Oxford', 'Universidad Nacional Autónoma de México (UNAM)', 'Universidad de Harvard', 'Universidad de Tokio', 'Universidad de Sídney', 'Universidad Técnica de Múnich']);
      programa.programasTitualcion = this.obtenerElementoAleatorio([
        'Doctorado en Ciencias de la Computación', 'MBA', 'Maestría en Ingeniería Eléctrica',
        'Doctorado en Historia', 'MSc en Inteligencia Artificial', 'Maestría en Economía',
        'Doctorado en Biología Molecular', 'Maestría en Estudios Latinoamericanos', 'Maestría en Derecho',
        'Doctorado en Psicología', 'Juris Doctor (JD)', 'Maestría en Administración Pública',
        'Doctorado en Física Cuántica', 'MBA en Negocios Internacionales', 'Maestría en Ingeniería Civil',
        'Doctorado en Medicina', 'Master of Arts in Linguistics', 'Maestría en Ciencias Ambientales',
        'Doctorado en Ingeniería Mecánica', 'Master of Science in Robotics', 'Maestría en Gestión de Tecnologías de la Información'
    ]
    );
      return programa;
    });
  }
}
