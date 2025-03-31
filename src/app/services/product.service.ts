import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("product service");
    
   }
   getProductData(){
    return[
      {name:'mobile',brand:'sony',price:'230000'},
      {name:'Laptop',brand:'Lenovo',price:'270000'},
      {name:'Tab',brand:'samsug',price:'290000'}
    ]
   }
}
