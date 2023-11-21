// shared.service.ts

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  mostrarLoginEmitter = new EventEmitter<boolean>();
  mostrarPantallaEmitter = new EventEmitter<boolean>();
}

