import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent {

  usuariosList: any[] = [];

  constructor(private usuarioService: UsuarioService){}

  ngOnInit() {

    this.usuarioService.obtenerPersona().subscribe( data => {
      this.usuariosList = this.actualizarPaises(data);
      console.log(this.usuariosList);
    });
  }

  private obtenerPaisAleatorio(): string {
    const paises = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú', 'Uruguay', 'Venezuela'];
    const indiceAleatorio = Math.floor(Math.random() * paises.length);
    return paises[indiceAleatorio];
  }

  private actualizarPaises(data: any[]): any[] {
    return data.map(usuario => {
      usuario.paisPrecedencia = this.obtenerPaisAleatorio();
      return usuario;
    });
  }

}
