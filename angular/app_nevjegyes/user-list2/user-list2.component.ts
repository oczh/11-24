import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list2.component.html',
  styleUrls: ['./user-list2.component.css']
})
export class UserList2Component {
    constructor(private service : UserService){
      this.loadData();
    }
    loadData(){
        this.service.getList().subscribe({
          next: (data) => {console.log(data);}
        })
    }
}
