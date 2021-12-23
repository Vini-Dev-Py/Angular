import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categorys?: Category[]
  displayedColumns = ["Identificador", "Categoria"]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.readCategory().subscribe(categorys => {
      this.categorys = categorys
      console.log(categorys)
    })
  }

}
