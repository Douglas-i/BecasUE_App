import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  private readonly usuario = 'usuario';

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    const username = this.loginForm.value.username;

    if (username === 'admin') {
      // Guardar el usuario en el servicio para que esté disponible en toda la aplicación
      this.userService.setUsuario(username);
      this.router.navigate(['/aceptarProgramas']);      
    } else {
      // Guardar el usuario en el servicio para que esté disponible en toda la aplicación
      this.userService.setUsuario(username);
      this.router.navigate(['/inicio']);
    }
  }

  registrar() {
    this.router.navigate(['/persona']);
  }
}
