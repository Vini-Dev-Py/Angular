import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products?: Product[]
  displayedColumns = ["image", "code", "name", "price", "categoryName"]
  imageSource;
  imagem;
  count = 0;

  constructor(private productService: ProductService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.productService.readProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  GerarImagem(contador: number): void {

    this.imagem = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${this.products[contador].image}`)

    this.count++
    
    return this.imagem;

  }

}
