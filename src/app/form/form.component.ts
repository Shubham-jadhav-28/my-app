import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
// name=new FormControl();
// password=new FormControl();

// displayValue(){
//   console.log(this.name.value,this.password.value);
  
// }
profileForm=new FormGroup({
  name:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')])

})
onSubmit(){
  console.log("onSubmit called");
  
}
get name(){
  return this.profileForm.get('name')
}
get password(){
  return this.profileForm.get('password')
}
get email(){
  return this.profileForm.get('email')
}
}
