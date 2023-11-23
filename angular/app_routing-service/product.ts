// Model osztály, Product class-ba tartozó elemek "utaznak" a frontend
// és backend között. 

// osztálydefiníció: leírom, hogy az osztályból létrehozott
// példányok (objektumok) milyen attribútumokkal és metódusokkal
// rendlkezzenek.
export class Product{
    id : number; // termék azonosító
    name : string; // termék neve
    price : number;  // termék ára 

    constructor(id : number, name : string, price : number){
        this.id = id;
        this.name  = name;
        this.price = price;
    }
}