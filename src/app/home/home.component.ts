import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router:Router){

}
goToProfile(){
  this.router.navigate(['profile'],{queryParams:{name:'Shubham'}})
}

users=[
  {
    id:1,
    name:'John',
    age:'24',
    email:'john@gamil.com'
  },
  {
    id:2,
    name:'Doe',
    age:'25',
    email:'Doe@gamil.com'
  },
  {
    id:3,
    name:'Smith',
    age:'28',
    email:'smith@gamil.com'
  },
  {
    id:4,
    name:'Alex',
    age:'30',
    email:'alex@gamil.com'
  }
]
}
