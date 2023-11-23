import { Component } from '@angular/core';

@Component({
  selector: 'app-szamkitalalo-jatek',
  templateUrl: './szamkitalalo-jatek.component.html',
  styleUrls: ['./szamkitalalo-jatek.component.css']
})
export class SzamkitalaloJatekComponent {
  min: number;
  max: number;
  gondoltSzam: number;
  szamok: number[];
  tippeltSzam?:number; 

  constructor(){
    this.min = -3;
    this.max = 10;
    this.gondoltSzam = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.szamok = [];
    for(let i = this.min; i <= this.max; i++){
        this.szamok.push(i);
    }
    console.log(this.gondoltSzam);
  }

  buttonClick(szam: number) : void {
    // töröjük a számok tömbből a paraméterben kapott számot 
    // és nézzük meg, hogy mi történik 
    let index = this.szamok.indexOf(szam);
    this.szamok.splice(index, 1);
    this.tippeltSzam = szam; // lementem az utolsó tippet 
  }
}
