import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number : number;

  constructor(){
    this.number = 0;
  }

  inc(){
    this.number++;
  }

  dec(){
    this.number--;
  }

}
