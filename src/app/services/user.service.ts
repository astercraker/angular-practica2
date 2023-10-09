import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject(this.loadUserFromLocalStorage());
  getUser = this.user.asObservable();

  constructor() {}

  setUser(user: any) {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  closeSession() {
    this.user.next(null);
    localStorage.removeItem('user');
  }

  private loadUserFromLocalStorage(): any {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
}
