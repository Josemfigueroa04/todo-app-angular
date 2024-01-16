import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Welcome to the Todo App';
  tasks = [
    'hola',
    'adios',
    'hello',
    'goodbye',
    'bonjour'
  ];

}
