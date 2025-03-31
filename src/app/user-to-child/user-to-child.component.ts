import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-to-child',
  imports: [],
  templateUrl: './user-to-child.component.html',
  styleUrl: './user-to-child.component.css'
})
export class UserToChildComponent {
@Input() user:string="";
}
