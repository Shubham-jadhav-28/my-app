import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Angular 4 App</h1>`
  // imports: [RouterOutlet],
  imports: [BindingComponent, RouterOutlet, FormsModule], 
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
