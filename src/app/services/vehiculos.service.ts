import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as vehicleData from '../vehiculos.json';
@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  data = vehicleData;
  http = inject(HttpClient);
  constructor() {}

  getUsers(): Observable<any> {
    return of(this.data.vehiculos);
  }
}
