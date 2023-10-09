import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { VehiculosService } from '../services/vehiculos.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userService = inject(UserService);
  vehicleService = inject(VehiculosService);
  constructor() {
    this.userService.getUser.subscribe((user) => (this.user = user));
  }

  mostrarVehiculos = false;
  user: any = null;
  searchTerm = new FormControl('');

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((res: any) => {
        this.vehicleService.setFilter(res);
        this.vehicleService.filterDataByTerm(res);
      });
  }

  toggleVehiculosMenu() {
    this.mostrarVehiculos = !this.mostrarVehiculos;
  }

  closeSession() {
    this.userService.closeSession();
  }

  buscar() {
    // Va la lógica de búsqueda aquí
  }
}
