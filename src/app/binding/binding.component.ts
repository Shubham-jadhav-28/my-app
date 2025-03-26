import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
  
})
export class BindingComponent {
pageTitle: string = 'Data Binding in Angular4';
pageTitle2: string = 'Data Binding in Angular';
imageUrl: string = "assets/clear-1-98.png";
btnStatus: boolean = true;
message = 'Hello!';
changeMessage() {
  alert('Button Clicked!');
  this.message = 'Button Clicked!';
}
name: string = '';

} 