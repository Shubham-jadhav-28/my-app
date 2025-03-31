import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() sendData : EventEmitter<string>= new EventEmitter<string>(); // Define Output event

  sendMessage() {
    this.sendData.emit('Hello Parent! This is data from the Child.');
  }
}
