import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../post';
import { map } from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  items? : any;
  items2? : Post[];
  items3? : Post[];

  // DI-vel létrehozom a service mezőt, amelyen keresztül 
  // HTTP kéréseket tudunk küldeni 
  constructor(private service : HttpClient){

    //this.loadData1()
   // this.loadData2();
   this.loadData3();
  }

  loadData3(){
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    // megfogalmazom a kérést a metódussal (függvény neve + URL)
    this.service.get<any>(URL) // ez a http kérés any adattípussal dolgozik a szerver felől 
      .pipe<Post[]>( // köztes lépéssor: az előző lépés kimente a következő lépés bemenete: map -> transzformációk, filter -> szűrések
          // 1) a letöltött adatokat átkonvertálom postokká 
          map((response) => { // feldolgozzuk a repsonse-t és annak eredményét visszaadjuk 
              let result : Post[] = [];
              for(let i = 0; i < response.length; i++){
                  let post = new Post(  // bejövő adat -> Post konverzió
                      response[i].id, 
                      response[i].title, 
                      response[i].body, 
                      response[i].userId
                  );
                  result.push(post);
              }
              return result;
          })
      )
      .subscribe( // az eredmény kliensbeli megjelenítése/feldolgozása
          (data) => { // az adatokat dolgozza fel, amiket megkap
            this.items3 = data;
          }, 
          (error) => { // ha hiba van, akkor ezt hívjuk meg, a hibát paraméterben adjuk át

          }, 
          () => { // a folyamat végén mintegy lezáró függvény meghívásra kerül 

          }
      );
  }



  loadData1(){ // adatok letöltése a szerverről 
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const METHOD = 'GET';
    // a http kliensnek minden http metódushoz van egy megfelelő
    // metódua, amit akkor kell hívni, ha ilyen módszerrel szeretnénk
    // kommunikálni a szerverrel
    this.service.get(URL) // meghívom a szolgáltatást 
      .subscribe( // feliratkozok a végeredményre 
          // 1. paraméterben kapja a letöltött adatokat (fat arrow!)
          (data) => {
            this.items = data;
            console.log(data);
          }
      )
  }

  loadData2(){ // adatok letöltése a szerverről 
    const URL = 'https://jsonplaceholder.typicode.com/posts';
  
    this.service.get(URL) // meghívom a szolgáltatást 
      .subscribe( // feliratkozok a végeredményre 
          // 1. paraméterben kapja a letöltött adatokat (fat arrow!)
          (data : any) => {
            //this.items2 = data; // egy Post típusú tömbbe egy Object nehezen lenn elhelyezhető 
          
            // végigmegyünk a data-n, minden elemből készítünk egy Post-ot és 
            // azt eltároljuk a tömbben 
            this.items2 = []; // kiürítem a tömböt 
            for(let i = 0; i < data.length; i++){
              let post = new Post(  // bejövő adat -> Post konverzió
                data[i].id, 
                data[i].title, 
                data[i].body, 
                data[i].userId
              );
              // hozzáadom a postok listájához a postot 
              this.items2.push(post);
            }
          }
      )

  }
}
