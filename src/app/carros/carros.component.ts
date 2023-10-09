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
  ngOnInit(): void {
    this.vehiculosService.getUsers().subscribe((data) => {
      this.vehiculos = data;
    });
  }
}
