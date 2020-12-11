import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductsUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) {  }

  showMessageProducts(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.ProductsUrl,
      product
    )
  }

  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ProductsUrl)
  }

}
