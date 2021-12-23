import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../category/category.model';
import { CategoryService } from '../../category/category.service';
import { async } from 'rxjs';

interface CategoryInterface {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    code: "",
    image: "",
    price: null,
    featured: "",
    categoryName: "",
    categoryId: null
  }

  SERVER = 'https://localhost:5501'
  form: FormGroup;
  response;
  imageURL;
  base64textString: string;
  categorys: Category[]
  categorysSelect: CategoryInterface[] = [];
  colorChecked = 'primary';
  checked = false;
  selected;
  category: Category

  changed(){
    console.log(this.checked)
  }

  constructor(private ProductService: ProductService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      imagem: ['']
    });

    this.categoryService.readCategory().subscribe(categorys => {
      this.categorys = categorys

      console.log(categorys)

      for(var i = 0; i < categorys.length; i++) {
        this.categorysSelect.push({value: categorys[i].id, viewValue: categorys[i].name})
      }
    })
  }

  featured() {
    this.checked = this.checked === true ? true : false;

    console.log(this.checked)
  }

  onChange(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  getCategory() {
    this.categoryService.readCategoryById(this.selected).subscribe(categoryGet => {
      this.category = categoryGet
    })
  }

  async onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('imagem').value);

    this.product.image = this.base64textString

    this.product.categoryId = this.selected

    console.log(this.product.categoryId)

    this.product.featured = this.checked === true ? "true" : "false"
    
    this.product.categoryName = await this.category.name

    if (this.product.categoryName != "") {
      this.ProductService.createProducts(this.product).subscribe(() => {
        this.ProductService.showMessageProducts('Produto Criado !')
        this.router.navigate(['/products'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
