import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName:string| null="";
constructor(private route:ActivatedRoute){}
  ngOnInit(){
    // let name = this.route.snapshot.paramMap.get('name');
    // // console.log(name);
    // console.log(this.userName);
 this.route.queryParams.subscribe(params=>{
  this.userName= params['name'];
  
 })
    
  }

}


