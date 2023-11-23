// szolgálatás: újrahasznosítható kódrészlet, amely független a komponensektől 
// cél: kiemeljük a szolgáltatást egy külön osztályba és azt
// bárki tudja használni, amikor szüksége van rá 

import { Product } from "./product";

export class ProductService{
    // terméklista lekérése 
    getList(){
        // szimulálom a lista működését: összeállítok egy tömböt
        // példaadatokkal és ezt adja a vissza a szolgáltatás 
        let items : Product[];

        items = [
            new Product(1, 'Pendrive', 350),
            new Product(2, 'Külső HDD', 520),
            new Product(3, 'DDR3 RAM 4 GB', 25000)
        ];

       // return []; // annak tesztelése, hogy nincs termék
        return items;
    }
}