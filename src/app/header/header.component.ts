import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userService = inject(UserService);
  constructor() {
    this.userService.getUser.subscribe((user) => (this.user = user));
  }

  mostrarVehiculos = false;
  user: any = null;

  ngOnInit(): void {}

  toggleVehiculosMenu() {
    this.mostrarVehiculos = !this.mostrarVehiculos;
  }

  buscar() {
    // Va la lógica de búsqueda aquí
  }
}
