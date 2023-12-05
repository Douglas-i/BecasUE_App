// detalles-programa.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalles-programa',
  templateUrl: './detalles-programa.component.html',
  styleUrls: ['./detalles-programa.component.css']
})
export class DetallesProgramaComponent {

  programa: any; // Asegúrate de que esta propiedad esté definida

  constructor(
    public dialogRef: MatDialogRef<DetallesProgramaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { programa: any }
  ) {
    this.programa = data.programa;
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
