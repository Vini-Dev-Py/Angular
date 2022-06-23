import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  value = 0;

  Soma(valor: number): void {
    if (valor === 5) {
      null
    } else {
      this.value = valor + 1
    }
  }

  Menos(valor: number): void {
    if (valor > 1) {
      this.value = valor - 1
    } else {
      null
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
