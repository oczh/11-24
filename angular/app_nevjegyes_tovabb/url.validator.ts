import { AbstractControl, ValidationErrors } from "@angular/forms";

export function url(control : AbstractControl) : ValidationErrors | null{

    const value : string = control.value;

    if(!value.startsWith('http') && !value.startsWith('https'))
        return {'url': true, 'acceptedProtocols': 'http/https'};
    if(!value.endsWith('.hu') && !value.endsWith('.org'))
        return {'url': true, 'acceptedDomains': 'hu/org'}

    return null; // minden renben, nem találtunk validációs hibát 
}