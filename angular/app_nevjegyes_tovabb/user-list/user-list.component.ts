import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  data : User[] = [];
  constructor(private service : UserService){}
 
  // inicializáláskor lefutó életciklus metódus 
  ngOnInit(): void {
    this.service.getData()
    .subscribe({
      next: (data) => {
        this.data = data; 
      },
      error: (error) => {alert(error); }
    })
  }
}
