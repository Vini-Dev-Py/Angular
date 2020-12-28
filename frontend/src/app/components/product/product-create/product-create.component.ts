import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    quantity: null
  }

  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.createProducts(this.product).subscribe(() => {
      this.ProductService.showMessageProducts('Produto Criado !')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
