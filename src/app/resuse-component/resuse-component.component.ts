import { Component } from '@angular/core';

@Component({
  selector: 'app-resuse-component',
  imports: [],
  templateUrl: './resuse-component.component.html',
  styleUrl: './resuse-component.component.css'
})
export class ResuseComponentComponent {
  users = ["John", "Doe", "Smith", "Alex", "Tom", "Jerry"];
}
