import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Modelos
import { User } from './user.model';

// Servicios
import { AuthService } from './auth.service';

// Informacion del Componente
@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})

// Acciones del Componente
export class SignupScreenComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      rpassword: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const { email, password, firstName, lastName, rpassword } = this.signupForm.value;
    if (this.signupForm.valid && password === rpassword) {
      const user = new User(email, password, firstName, lastName);
      this.authService.signup(user)
        .subscribe(
          this.authService.login,
          this.authService.handleError
        );
    }
  }
}
