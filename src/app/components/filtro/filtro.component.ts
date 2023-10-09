import { Component, inject } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent {
  vehicleService = inject(VehiculosService);
  tipo: string = 'auto';
  marca: string = 'toyota';
  modelo: string = '';
  anoDesde: number = 0;
  anoHasta: number = 0;

  buscarVehiculos() {
    // Implementa la lógica de búsqueda aquí
    console.log('Realizando búsqueda...');
    if (this.tipo) {
      this.vehicleService.filterByTipo(this.tipo);
    }
    console.log('Tipo de Vehículo:', this.tipo);
    if (this.marca) {
      this.vehicleService.filterByMarca(this.marca);
    }
    console.log('Marca:', this.marca);
    console.log('Modelo:', this.modelo);
    console.log('Año Desde:', this.anoDesde);
    console.log('Año Hasta:', this.anoHasta);
  }
}
