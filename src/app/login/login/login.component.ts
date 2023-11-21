import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  login() {
    // Lógica de inicio de sesión


    // Simulación de inicio de sesión exitoso
    if (this.username === '' && this.password === '') {
      this.sharedService.mostrarPantallaEmitter.emit(true);
      console.log('Iniciar Sesión:', this.username, this.password);
    }
  }

  register() {
    // Lógica de registro
    console.log('Registrarse:', this.username, this.password);
  }
  
  mostrarLogin: boolean = true;
  mostrarRegistro: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Suscribirse al evento para cambiar la visibilidad del formulario de inicio de sesión
    this.sharedService.mostrarLoginEmitter.subscribe((mostrar: boolean) => {
      this.mostrarLogin = mostrar;
      this.mostrarRegistro = !mostrar;
    });
  }

  mostrarFormularioRegistro() {
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }

}
