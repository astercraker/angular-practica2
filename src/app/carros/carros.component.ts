import { Component, inject } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
})
export class CarrosComponent {
  vehiculosService = inject(VehiculosService);
  vehiculos: any = [];
  vehiculosFiltrados: any = [];
  filter = '';

  constructor() {
    this.vehiculosService.getFilter.subscribe((filter) => {
      this.filter = filter;
      let vehiculosFilter = this.vehiculos.filter((user: any) =>
        user.title.toLowerCase().includes(this.filter.toLowerCase())
      );
      console.log(vehiculosFilter.length);
      if (vehiculosFilter.length === 0) {
        this.vehiculosFiltrados = this.vehiculos;
      } else {
        this.vehiculosFiltrados = vehiculosFilter;
      }
    });
  }
  ngOnInit(): void {
    this.vehiculosService.getVehicles().subscribe((data: any[]) => {
      this.vehiculos = data;
      this.vehiculosFiltrados = data;
    });
  }
}
