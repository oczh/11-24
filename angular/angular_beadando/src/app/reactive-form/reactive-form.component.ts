import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { szazalekSzamol, jegySzamol } from '../szamitas';
import { adatok, errorMessage } from '../adatok';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  eredmenyekUrlap : FormGroup;
  szazalek: number;
  erdemjegy : string;
  reszfeladatok = adatok;
  hiba = errorMessage;

  constructor(){
    this.szazalek = 0;
    this.erdemjegy = '';
    this.eredmenyekUrlap = new FormGroup({
      spgwP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(adatok.spwg.max)]),
      tablP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(adatok.tablazat.max)]),
      adbazP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(adatok.adatbazis.max)]),
      algoP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(adatok.algoritmizalas.max)]),
      szobP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(adatok.szobeli.max)])
    });
  }

  onSubmit(){
    this.szazalek = szazalekSzamol(this.eredmenyekUrlap);
    this.erdemjegy = jegySzamol(this.szazalek);
    
  }

  formChange(){
    this.szazalek = 0;
    this.erdemjegy = '';
  }

  clearForm() : void{
    this.eredmenyekUrlap.reset();
    this.szazalek = 0;
    this.erdemjegy = '';
  }
}
