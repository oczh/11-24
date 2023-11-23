import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  // reactive (vagy model vezérelt ) esetben az űrlapot a komponenosztályban építem fel 
  // FormControl: vezérlők, FormGroup: vezérlők gyűjteménye, a vezérlők státuszának és értékenk nyomkövetése céljából 
  // FormArray: gyűjtő, puffer a FormControlok számára (dinamikus form építés)

  // 1. Import 
  // 2. FormModel (FormGroup) létrehozása, ebben FormGroup, FormArray és FormControl elhelyezés
  // 3. Sablon létrehozása (html űrlap)
  // 4. A FormModel és a sablon összekötése 
  kapcsolatiUrlap : FormGroup;
  constructor(){
    // A FormGroupnak 3 paramétere van: 1. a gyermek kontrollok gyűjteménye, 2. validátor,
    // 3. async validátor (a 2 és 3. paraméter opcionális)

    // az egyes formcontrolnak is 3 praméterük lehet: az 1. az alpértelmezett érték (egyszerű szöveg, vagy objektum is), 
    // a 2. paraméter a validátorok, a 3. paraméter az async validátorok 
    this.kapcsolatiUrlap = new FormGroup({
        vezeteknev: new FormControl(null, [Validators.required]), // a mező alapértelmezett értéke Teszt 
        keresztnev: new FormControl(null, [Validators.required]), 
        email: new FormControl(null, []), 
        telszam: new FormControl(null, []), 
        nem: new FormControl(),  // radio gomb
        hazas: new FormControl(),  // checkbox
        allampolgarsag: new FormControl(null, []), // select
        cim: new FormGroup({ // a beágyazott adatok gyűjtésére beágyazott FormGroupot hozok létre 
          irsz: new FormControl(null, []),
          varos: new FormControl(null, []),
          cim: new FormControl(null, [])
        })
    });

    console.log(this.kapcsolatiUrlap);
  }

  // készítek egy get-ter: a get-ter az osztály függvény, de kifelé mezőként viselkedik, a mező értéke 
  // a függvényben visszaadott érték lesz (virtuális mező)
  get vnev(){
    return this.kapcsolatiUrlap.get('vezeteknev');
  }

  onSubmit(){
    console.log(this.kapcsolatiUrlap.value)
  }
}
