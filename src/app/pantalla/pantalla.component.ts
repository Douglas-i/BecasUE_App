// pantalla.component.ts

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {

  mostrarPantalla: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.mostrarPantallaEmitter.subscribe((mostrar: boolean) => {
      this.mostrarPantalla = mostrar;
      console.log('Mostrar Pantalla:', this.mostrarPantalla);
    });
  }

  // ... (otras funciones)
  obtenerTituloPorIndice(indice: number): string {
    const titulos = [
      'Ciencias de la Computación - Stanford - Otoño 2023 - Tiempo completo',
      'MBA - Harvard Business School - Primavera 2023 - Tiempo parcial',
      'Ingeniería Ambiental - MIT - Invierno 2023 - Tiempo completo',
      'Psicología - UC Berkeley - Otoño 2023 - Tiempo completo',
      'Medicina - Johns Hopkins - Verano 2023 - Tiempo completo',
      'Diseño Gráfico - Rhode Island - Otoño 2023 - Tiempo completo',
      'Ciencias Políticas - Oxford - Primavera 2023 - Tiempo completo',
      'Estudios Internacionales - Ginebra - Invierno 2023 - Tiempo completo',
      'Economía - LSE - Otoño 2023 - Tiempo completo',
      'Bellas Artes - School of Visual Arts, NY - Primavera 2023 - Tiempo completo'
    ];

    // Asegurarse de que el índice está en el rango adecuado
    const indiceValido = Math.max(0, Math.min(indice - 1, titulos.length - 1));

    return titulos[indiceValido];
  }
}

