// modal-programa.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiosAcademicosDTO } from '../Interface/estudiosAcademicos';
import { EstudiosService } from '../services/estudios.service';

@Component({
  selector: 'app-modal-programa',
  templateUrl: './modal-programa.component.html',
  styleUrls: ['./modal-programa.component.css']
})
export class ModalProgramaComponent {

  programa: any;
  estudiosAcademicos: EstudiosAcademicosDTO[];

  constructor(
    public dialogRef: MatDialogRef<ModalProgramaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { programa: any },
    private estudiosService: EstudiosService
  ) {
    this.programa = data.programa;
    console.log(this.programa);

    //Obtener los Estudios
    this.estudiosService.obtenerEstudios().subscribe(data => {
      this.estudiosAcademicos = data;
    });
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
