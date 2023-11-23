import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {FormGroup, FormArray, FormControl, Validators} from '@angular/forms'
import { age } from '../age.validator'; // saját vaidátor betöltése későbbi használat céljából 
import { url } from '../url.validator'; // url ellenőrzéshez validátor 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
    infoMessage? : string;
    errorMessage? : string;
    userForm : FormGroup; 
    constructor(private service : UserService, private router : Router){
      this.userForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(5)]), 
        age: new FormControl('', [/*Validators.min(5), Validators.max(100*/ age]), 
        image: new FormControl('', [Validators.required, url]), 
        email: new FormControl('', [Validators.email, Validators.required])
      });
     
    } 

    onSubmit(){
      // az adatok elküldjük beszúrásra a szerverre 
        let newUser = new User(-1, 
          this.userForm.value.name, 
          this.userForm.value.age, 
          this.userForm.value.email, 
          this.userForm.value.image, 
          new Date()
        );
        
        this.service.createUser(newUser)
          .subscribe({
              next: (response : any) => {
                if(response.status === 200){
                  this.infoMessage = 'Sikeres beszúrás, automatikus átirányítás a lista oldalra 5 mp-ben belül!';
                  setTimeout(() => {
                    this.router.navigate(['users']);
                  }, 5000);
                }
              },
              error: (error) => {
                this.errorMessage = 'Sikeretel beszúrás!';
              }
          })
        
    }
    
}
