import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  @Input() username = "";

  age = "24";

  @Output() shareAge = new EventEmitter<String>();

  shareAgeUsername (age: String){
    this.shareAge.emit(age);
  }

}
