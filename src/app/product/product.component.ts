import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList = [{
    name: "A",
    price: "123"
  }, {
      name: "A",
      price: "123"
    }, {
      name: "A",
      price: "123"
    }, {
      name: "A",
      price: "123"
    }];

  constructor( private _router: Router) { }

  ngOnInit(): void {
    
  }
  toDeletePage(){
    this._router.navigate(['/deleteProduct/']);
  }
  toUpdatePage() {
    this._router.navigate(['/updateProduct/']);
  }
}
