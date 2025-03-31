import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
// counter app
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

}
