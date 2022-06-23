import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: "",
    description: "",
    products: []
  }

  constructor(private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.categoryService.createCategory(this.category).subscribe(() => {
      this.categoryService.showMessageProducts('Categoria Criada !')
      this.router.navigate(['/categories'])
    })
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

}
