import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get('https://apingweb.com/api/users')
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
  }
}
