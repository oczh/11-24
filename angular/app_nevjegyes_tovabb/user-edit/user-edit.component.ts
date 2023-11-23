import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { age } from '../age.validator';
import { url } from '../url.validator';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy{
  userForm : FormGroup; 
  user? :User;
  // az adott kérés paramétereiet az ActivatedRoute-n kereztül tudjuk lekérdezni 
  constructor(private activatedRoute : ActivatedRoute, private service : UserService){
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]), 
      age: new FormControl('', [/*Validators.min(5), Validators.max(100*/ age]), 
      image: new FormControl('', [Validators.required, url]), 
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  onSubmit(){

  }
  
  ngOnDestroy(): void {
    // komponens megszűnése előtt leriratkozom az activatedRoute-ról 
  }
  
  ngOnInit(): void {
    // feliratkozom az activatedRout-ra az induláskor 
    this.activatedRoute.paramMap.subscribe((params) => {
      //  console.log(params.get('id')); // lekérdezem a route-ban :id-vel (id névvel) ellátott paraméter értékét
      let userId = Number(params.get('id'));
      this.service
        .getUserById(userId)
        .subscribe({
            next: (data : User) => { this.user = data; console.log(this.user);
              this.userForm.controls['name'].setValue(this.user.name);
              this.userForm.controls['age'].setValue(this.user.age);
              this.userForm.controls['email'].setValue(this.user.email);
              this.userForm.controls['image'].setValue(this.user.image);
            }
        });
    }
    );
  }

  

  
}
