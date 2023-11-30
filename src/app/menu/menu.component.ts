import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router){}

  ofertaAnual() {
    this.router.navigate(['/OfertaAnual'])
  }

  universidad(){
    this.router.navigate(['/universidad'])
  }

  programasOfertados(){
    this.router.navigate(['/programaOfertados'])
  }

  solicitudesProgramas() {
    this.router.navigate(['/aceptarProgramas'])
  }

  registrar() {
    this.router.navigate(['/persona'])
  }
}
