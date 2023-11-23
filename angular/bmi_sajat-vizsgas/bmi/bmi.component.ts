import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight : number;
  height : number;
  bmi? : number;

  constructor(){
    this.weight = 50;
    this.height = 1.6;
  }

  decWeight(){
    this.weight--;
  }

  incWeight(){
    this.weight++;
  }

  decHeight(){
    this.height = this.height - 0.1;
  }

  incHeight(){
    this.height = this.height + 0.1;
  }

  calculateBmi(){
    this.bmi = this.weight / (this.height * this.height)
    //this.bmiClass(this.bmi)    
  }
  
}

