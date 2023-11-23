import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }

  GET_URL : string = 'https://apingweb.com/api/user/';
  getUserById(userId : number){
      // visszadjuk egy olyan map-elt választ, ami a paraméterben kapott id alapján visszaadja 
      // a megfelelő user példányt
      let actualUrl = this.GET_URL + userId;
      return this.http.get<any>(actualUrl)
        .pipe(map((response) => {
            if(response.status !== 200) throw new Error('Hiba a végrehajtás során!');

            let rawData = response.data[0];
            let user = new User(+rawData.user_id, rawData.name, +rawData.age, rawData.email, rawData.image, new Date(rawData.date_created));

            return user;
        }));
  }

  LIST_URL : string = 'https://apingweb.com/api/users';
  getData(){
    return this.http.get<any>(this.LIST_URL)
          .pipe(
            map((response) => {
                if(response.status !== 200){
                    throw new Error('A válasz helytelen státuszkóddal tért vissza!');
                }
                let temp : User[] = [];

                for(let i = 0; i < response.data.length; i++){
                    let user = new User(
                      response.data[i].user_id, 
                      response.data[i].name, 
                      response.data[i].age,
                      response.data[i].email, 
                      response.data[i].image, 
                      new Date(response.data[i].date_created)
                    )
                    if(user.age > 18) temp.push(user);
                }

                return temp;
            })/*,
            filter((data, index) => {
                return true;
            })*/
          )
  }

  ADD_URL : string = 'https://apingweb.com/api/user/create';
  createUser(newUser : User){
      let postedHeaders = {'content-type': 'application/json'}
      let postedObject = {
        name: newUser.name, 
        age: newUser.age, 
        email: newUser.email, 
        image: newUser.image
      }
      return this.http.post(this.ADD_URL, JSON.stringify(postedObject), { headers: postedHeaders});
  }

  // készítsünk olyan szolgáltatást, amely segítségével a paraméterben kapott 
  // user-t lehet törölni, a szolgáltatásra való feliratkozás esetén 
  // a http státuszkód alapján true vagy false értéket kapjunk vissza 
  /*
        {
          "success": true,
          "message": "Success",
          "status": 200
      }
  */
 DELETE_URL : string = 'https://apingweb.com/api/user/delete/'
 deleteUser(userToDelete : User){
    let acutalUrl = this.DELETE_URL + userToDelete.id;

    return this.http.delete(acutalUrl)
      .pipe(map((response : any) =>{
            if(response.status === 200) return true;
            else return false;
      }))
 }
}
