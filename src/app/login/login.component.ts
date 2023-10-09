import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);
  userService = inject(UserService);
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          // Validators.email
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.http.post;

    // console.log(JSON.stringify(this.form.value, null, 2));

    this.http
      .post('https://dummyjson.com/auth/login', {
        ...this.form.value,
        username: this.form.value.email,
      })
      .subscribe({
        next: (data: any) => {
          // localStorage.setItem('user', JSON.stringify(data));
          this.userService.setUser(data);
          this.router.navigate(['/']);
        },
        error: (e) => {
          alert('Error en el logueo');
        },
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
