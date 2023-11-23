import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

    // jelenleg "kifelé" a beállítás során a tualjdonság neve actualUser
    @Input('actualUser') // a mező kívülről (más komponenstől kaphat értéket)
    user? : User; // a kiválasztott user tárolása 

    constructor(){}
}
