import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
// To-Do List 
task="";
taskList:{id:number,task:string}[]=[]

addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.task})
 this.task=''
  console.log(this.addTask);
  
}

deleteTask(taskId:number){
this.taskList=  this.taskList.filter((item)=>item.id!=taskId);
console.log(this.taskList);

}
}
