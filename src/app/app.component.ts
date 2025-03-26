import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Angular 4 App</h1>`
  // imports: [RouterOutlet],
  imports: [BindingComponent, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  count = 0;
  handleCounter(val: string) {
    if (val == 'minus') {
      this.count = this.count - 1;
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  display=true;
  toggleDiv=true;
  color=2;
  colors:string='gold';

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  }
  toggleTwo(){
    this.toggleDiv=!this.toggleDiv;
  }
  hadleColor(val: number){
    this.color = val;
  }
  hadleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value);
  }
}
