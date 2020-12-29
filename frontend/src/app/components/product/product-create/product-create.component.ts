import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    SKU: '',
    imageProducts: ''
  }

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response;
  imageURL;


  constructor(private ProductService: ProductService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      imagem: ['']
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('imagem').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('imagem').value);

    this.ProductService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        this.product.imageProducts = `${this.imageURL}`; // /media/Tv8K_Bolada.jpg
        console.log("this.product.image = " + this.product.imageProducts)

        this.product.imageProducts = `${this.imageURL}`

        console.log("É esse" + this.product.imageProducts)

        this.ProductService.createProducts(this.product).subscribe(() => {
          this.ProductService.showMessageProducts('Produto Criado !')
          this.router.navigate(['/products'])
        })

        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {  
        console.log(err);
      }
      
    );

  }

  // createProduct(): void {

  //   this.product.imageProducts = `${this.imageURL}`

  //   console.log("É esse" + this.product.imageProducts)

  //   this.ProductService.createProducts(this.product).subscribe(() => {
  //     this.ProductService.showMessageProducts('Produto Criado !')
  //     this.router.navigate(['/products'])
  //   })

  //   console.log(this.product)
  // }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
