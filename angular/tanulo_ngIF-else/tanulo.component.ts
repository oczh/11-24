import { Component } from '@angular/core';
import { Tanulo } from '../tanulo';

@Component({
  selector: 'app-tan',
  templateUrl: './tanulo.component.html',
  styleUrls: ['./tanulo.component.css']
})
export class TanuloComponent {
  tanulo : Tanulo;

  constructor(){
    this.tanulo = new Tanulo('Teszt Elek');
  }
}
