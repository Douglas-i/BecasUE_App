// registro.component.ts

import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombres: string = '';
  apellidos: string = '';
  pais: string = '';
  correo: string = '';
  pasaporte: string = '';
  username: string = '';
  password: string = '';

  constructor(private sharedService: SharedService) {}

  guardar() {
    // Lógica para guardar la información (puedes enviarla al servidor aquí)
    console.log('Información guardada:', this.nombres, this.apellidos, this.pais, this.correo, this.pasaporte, this.username, this.password);

    // Puedes reiniciar los campos del formulario después de guardar
    this.nombres = '';
    this.apellidos = '';
    this.pais = '';
    this.correo = '';
    this.pasaporte = '';
    this.username = '';
    this.password = '';

    // Emitir el evento para mostrar el formulario de inicio de sesión
    this.sharedService.mostrarLoginEmitter.emit(true);
  }
}



