import { Component, inject } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Login } from '../../interfaces/login';
import { AuthResponse } from '../../interfaces/auth-response';
import { AuthRequestLogin } from '../../interfaces/auth-request-login';
import { DemoMongo } from '../../interfaces/demo-mongo';
import { STATUS_OK } from '../../utils/constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UsuariosComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = "andresr";

  ageUser: String = ''

  isLoggued = false;

  loginService: LoginService = inject(LoginService);

  login: Login = {
    token: "token"
  } 
  
  //this.loginService.getLoginResponse();

  loginForm = new FormGroup({
    username: new FormControl("Andres"),
    password: new FormControl("12345")
  });

  loginJWT() {

    const authRequestLogin: AuthRequestLogin = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.loginService.getLoginJWT(authRequestLogin).subscribe({
      next: (response: AuthResponse) => {
        console.log(response);
        this.login.token = response.token
        sessionStorage.setItem("jwt", this.login.token);
        this.isLoggued = true
      },
      error: (error) => {
        console.error('Error:', error);
        if (error.status == STATUS_OK) {
          this.login.token = error.status
        } else {
          alert("Bad credential")
        }
      }
  });
  }

  logout() {
    this.isLoggued = false
    sessionStorage.removeItem("jwt")
    this.login.token = ""
  }

  getAll() {
    this.loginService.getAll().subscribe(
      (response: DemoMongo) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  startLogin(){
    console.log(this.loginForm.value)
  }

  getAge(age: String){
    this.ageUser = age;
  }
}
