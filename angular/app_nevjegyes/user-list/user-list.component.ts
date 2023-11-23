import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    users : User[] = []; // üres tömböt rendelek hozzá, így elkerülhető az undefined kezelése a későbbiekben 
    loading : boolean = false; // azt jelöli, hogy letöltés folymatban van-e
    status : boolean = true; // azt jelöli, hogy sikeres-e az adatok letöltése 
    selectedUser? : User; // ebbe fogom tárolni, ha valaki user választott a listából

    constructor(private http : HttpClient){
      this.loadData();
    }

    loadData(){
      /*this.loading = true;
       this.http.get('https://apingweb.com/api/users')
        .subscribe({
          next: (response : any) => {
              if(response.status !== 200) this.status = false;
              else this.status = true;

              console.log(response.data);
          },
          error: (error) => { this.status = false },
          complete: () => { this.loading = false;}
        });*/

       
        this.http.get('https://apingweb.com/api/users')
          .pipe(
              map((response : any) => {
                  let items : User[] = [];

                  for(let i = 0; i < response.data.length; i++){
                      let u = new User(
                          response.data[i].user_id, 
                          response.data[i].name, 
                          (new Date()).getFullYear() - response.data[i].age,
                          response.data[i].email, 
                          response.data[i].image
                      );

                      items.push(u);
                  }

                  return items;
              })
          )
          .subscribe({
              next: (data) => { this.users = data;},
              error: (error) => {console.log(error);},
              complete: () => {}
          })

    }

    onClick(user : User){
      this.selectedUser = user;
    }

    deleteUser(user : User){
        const url = 'https://apingweb.com/api/user/delete/' + user.Id;
        this.http.delete<{status: number, message: string, success: boolean}>(url)
            .subscribe({
              next: (response) => {
                  // ha sikerült a törlés, akkor újra lekérem az adatokat a serverről
                  if(response.status === 200) this.loadData();
              }
            });
    }
}
