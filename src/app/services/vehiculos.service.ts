import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of, map } from 'rxjs';

import * as vehicleData from '../vehiculos.json';
@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  data = vehicleData;
  filter = new BehaviorSubject('');
  getFilter = this.filter.asObservable();

  getVehicles(): Observable<any> {
    return of(this.data.vehiculos);
  }

  setFilter(filter: string) {
    this.filter.next(filter);
  }
}
