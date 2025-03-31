import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  productData:{
    
     name: string;
      brand: string;
      price: string;
  }[]|undefined;
  
constructor(private productService:ProductService){
}
getProductData(){
this.productData =  this.productService.getProductData()
// console.log(this.productData);

}

}
