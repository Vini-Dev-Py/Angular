import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    nameProducts: '',
    price: null,
    quantity: null,
    image: undefined
  }

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  response;
  imageURL;


  constructor(private ProductService: ProductService,
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {

  }

  OnChange(event) {
    console.log(event)
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
