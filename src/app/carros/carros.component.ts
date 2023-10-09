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
  filter: string | null = null;
  firstTime = false;

  constructor() {
    this.vehiculosService.getFilter.subscribe((filter) => {
      this.filter = filter;
      console.log(filter);
    });
  }
  ngOnInit(): void {
    this.vehiculosService.getVehicles().subscribe((data: any[]) => {
      // this.vehiculos = data;
      this.vehiculosFiltrados = data;
      console.log('getVehicles', data);
    });
    this.vehiculosService.filteredData.subscribe((data: any) => {
      console.log('Change filter', data);
      // console.log(vehiculosFilter.length);
      if (data && this.firstTime) {
        this.vehiculosFiltrados = data;
      }
      this.firstTime = true;
    });
  }
}
