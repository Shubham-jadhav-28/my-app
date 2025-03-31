import { Component } from '@angular/core';
import { UsersService } from '../Apis/users.service';
import { User } from '../interface/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  imports: [FormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  users: User[] = [];
  selectedUser:User|undefined;
  // getUser: any;
  constructor(private userService: UsersService) {

  }
  ngOnInit() {
    // this.userService.getUsers()?.subscribe((data:User[])=>{
    this.getUser();



  }
  getUser() {
    this.userService.getUsers()?.subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })
  }

  addUser(user: User) {
    if(!this.selectedUser){
    this.userService.saveUsers(user).subscribe((data: User) => {
      if (data) {
        this.getUser()
      }
      console.log(data);

    })
  }else{
    const userData={...user,id:this.selectedUser.id}
    this.userService.updateUser(userData).subscribe((data)=>{
      if (data) {
        this.getUser()
      }
    })
    
  }
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data:User)=>{
      console.log(data);
      if (data) {
        this.getUser()
      }
    })
  }
  selectUser(id:string){
    console.log(id);
    this.userService.getSelectedUser(id).subscribe((data:User)=>{
      console.log(data);
     this.selectedUser=data
    })
  }
}
