import { Component, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input('user')
  user? : User; 
  show : boolean = false;
  error? : boolean;

  constructor(private service : UserService, private router : Router){
    console.log(this.user);
  }

  editUser(){
    // ha rákattintanak a gombra, akkor navigáljunk a users/edit végpontra 
    this.router.navigate(['users', 'edit', (this.user as User).id]);
  }
  
  clickShow(){
    this.show = true;
  }

 

  deleteUser(){
    if(this.user){
      this.service.deleteUser(this.user)
          .subscribe({
            next: (success) => {
               if(!success) this.error = true;
               else this.error = false;
            }, 
            error: (error) => {
               this.error = true;
            }
          })
    }
    
  }
}
