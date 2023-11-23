import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  // service : ProductService; (v1 - létrehozom a tuljandonásgot)
  items : Product[];

  // DI: private service : ProductService: létehozok egy ProducService példányt, amelyet
  // az osztályban eltárolunk a service attribútumban 
  constructor(private service : ProductService){
    // this.service = new ProductService(); // példányosítás (v1 - manuálisan példányosításom a szlgáltatást)
    this.items = this.service.getList();
  }

}
