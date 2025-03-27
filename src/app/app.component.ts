import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

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

  color = 2;
  // switch case 
  colors: string = 'gold';
  // Forloop
  users = ["John", "Doe", "Smith", "Alex", "Tom", "Jerry"];
  students = [
    { name: "John", age: 20, email: 'john@gmail.com' },
    { name: "Doe", age: 21, email: 'doe@gmail .com' },
    { name: "Smith", age: 22, email: 'smith@gmail.com' },
    { name: "Alex", age: 23, email: 'alex@gmail.com' },
    { name: "Tom", age: 24, email: 'tom@gamil.com' },
    { name: "Jerry", age: 25, email: 'jerry@gamil.com' }
  ];

  getName(val: string) {
    console.log(val);
  }

  // signal angular
  count1 = signal(10);
  x = 20;

  // constructor() {
  //   effect(() => {
  //     // console.log(this.count1());

  //   })
  // }
  updateValue(val: string) {
    // this.count1.set(this.count1()+1);
    // this.x=30
    if (val == 'inc') {
      this.count1.set(this.count1() + 1);
    } else {
      this.count1.set(this.count1() - 1);
    }
  }
  // DataType oF signal 
  // data=signal<number | string>(10);
  data: WritableSignal<number | string> = signal(10);
  // count2:Signal<number> = computed(()=>200);

  updateSignal() {
    this.data.set("Hello")
    // this.count.set(20)

    // this.data.update((val)=>val+1)
  }
  // Computed Signal 
  a = signal(10);
  b = signal(20);
  z = computed(() => this.a() + this.b())

  showComputed() {
    console.log(this.z());

  }
  updateComputed() {
    this.a.set(300)

  }

  // Effect Angular 
  userName = signal('Ram');
  count3 = signal(0)
  displayHeading = false;

  constructor() {
    console.log('Effect triggered - count3:', this.count3());
    effect(() => {
      if (this.count3() == 2) {
        this.displayHeading =true
        console.log(this.displayHeading);
        
        setTimeout(() => {
          this.displayHeading = false
        }, 2000)
      } else {
        this.displayHeading=false
      }
    })
  }
  toggleValue() {
    this.count3.set(this.count3() + 1)
    console.log(this.count3());
    
  }

// For Loop Contextual Variable
sutents =["John", "Doe", "Smith", "Alex", "Tom", "Jerry"];

// To-Do List 
task="";
taskList:{id:number,task:string}[]=[]

addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.task})
  console.log(this.addTask);
  
}

  //  if else 
  display = true;
  toggleDiv = true;

  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
  toggle() {
    this.display = !this.display;
  }
  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }
  hadleColor(val: number) {
    this.color = val;
  }
  hadleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}

