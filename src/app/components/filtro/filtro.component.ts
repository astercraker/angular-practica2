import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent {
  tipo: string = 'auto';
  marca: string = 'toyota';
  modelo: string = '';
  anoDesde: number = 0;
  anoHasta: number = 0;

  buscarVehiculos() {
    // Implementa la lógica de búsqueda aquí
    console.log('Realizando búsqueda...');
    console.log('Tipo de Vehículo:', this.tipo);
    console.log('Marca:', this.marca);
    console.log('Modelo:', this.modelo);
    console.log('Año Desde:', this.anoDesde);
    console.log('Año Hasta:', this.anoHasta);
  }
}
