import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

import * as vehicleData from '../vehiculos.json';
@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  data: any = vehicleData;
  filter = new BehaviorSubject('');
  getFilter = this.filter.asObservable();
  filteredData = new BehaviorSubject([]);

  getVehicles(): Observable<any> {
    return of(this.data.vehiculos);
  }

  setFilter(filter: string) {
    this.filter.next(filter);
  }

  filterDataByTerm(filterTerm: string): void {
    const resultFiltered = this.data.vehiculos.filter((vehicle: any) =>
      vehicle.title.toLowerCase().includes(filterTerm.toLowerCase())
    );
    this.filteredData.next(resultFiltered);
  }

  filterByTipo(filterTerm: string): void {
    const resultFiltered = this.data.vehiculos.filter((vehicle: any) =>
      vehicle.tipoLabel.toLowerCase().includes(filterTerm.toLowerCase())
    );
    this.filteredData.next(resultFiltered);
  }

  filterByMarca(filterTerm: string): void {
    const resultFiltered = this.data.vehiculos.filter((vehicle: any) =>
      vehicle.marcaLabel.toLowerCase().includes(filterTerm.toLowerCase())
    );
    this.filteredData.next(resultFiltered);
  }
}
