import { Component } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = "andresr";

  ageUser: String = ''

  getAge(age: String){
    this.ageUser = age;
  }

  isLoggued = false;

  hola () {
    alert("Hola mundo")
  }
}
