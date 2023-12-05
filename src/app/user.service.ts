// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuario: string;

  setUsuario(usuario: string): void {
    this.usuario = usuario;
  }

  getUsuario(): string {
    return this.usuario;
  }
}
