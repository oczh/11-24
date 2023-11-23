// saját validátor készítése: életkor validátor: az életkor 0 és 100 között helyes

// a validátort függvényként hozzuk létre (a validátor felületét a ValidatorFn interface határozza meg)
import { AbstractControl, ValidationErrors } from "@angular/forms";

// control: a FormsControl, amelyhez hozzárendeltük validátort (beviteli mező)
export function age(control : AbstractControl) : ValidationErrors | null {
    const controlValue = control.value; // kiolvasom a controlból az értéket 
    
    // 1) a controlValue értékének számnak kell lennie, különben hiba  
    // a hiba első kulcsa a validátor azonosítója, amely igaz értéket vesz fel, ha van hiba 
    if(isNaN(Number(controlValue))) return {'age': true, 'type': 'integer'};
    // 2) a controlValue értéke csak egész szám lehet 
    if(!Number.isInteger(controlValue)) return {'age': true, 'type': 'integer'};
    // 3) ha a controlValue kisebb, mint 0, akkor hiba 
    if(controlValue < 0) return {'age': true, 'minValue': '0'}
    // 4) ha a controlValue nagyobb, mint 100, akkor hiba 
    if(100 < controlValue) return {'age': true, 'maxValue': '100'};

    return null; // ha nincs menet közben semmilyen hiba, akkor null érték vissszadásval jelezzük az adathelyességét
}