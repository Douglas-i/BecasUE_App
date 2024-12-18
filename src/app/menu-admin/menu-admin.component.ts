import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  constructor(private router: Router){}

  solicitarPrograma() {
    this.router.navigate(['/solicitudProgramas']);
  }

  estudiosAcademicos() {
    this.router.navigate(['/estudiosAcademicos']);
  }

  inicio() {
    this.router.navigate(['/inicio'])
  }

  experienciaLaboral(){
    this.router.navigate(['/experienciaLaboral']);
  }
}
